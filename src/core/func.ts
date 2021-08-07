import "reflect-metadata";
import {InternalMatchConstructor, InternalRulesValue} from "../internal";
import {RulesExpression} from "./RulesExpression";
import {RulesValue} from "./RulesValue";

/**
 * A function within match block.
 */
export function func(options?: {exportedName?: string}) {

    return function (targetClass: any, functionName: string, descriptor: PropertyDescriptor) {

        const classConstructor: InternalMatchConstructor = targetClass.prototype ? targetClass : targetClass.constructor;
        const originalFunction: Function = descriptor.value;

        const exportedName = options?.exportedName || (!!targetClass.prototype ? `${classConstructor.name}_${functionName}` : functionName);

        const argsTypes: any[] = Reflect.getMetadata("design:paramtypes", targetClass, functionName) as any[];
        const argsNames = (originalFunction.toString().match(`^${functionName}\\(\\s*([^)]+?)\\s*\\)`) || [])
            .map((v, i) => i === 1 ? v.split(",").map(v => v.trim()) : v)
            .find((value, index) => index === 1) as string[];

        // new function will be executed whenever original was referenced/called and when executed it builds
        // a rules expression that calls rules function which was defined by func()
        const newFunction = function () {

            const expression = [];

            for (let i = 0; i < arguments.length; i++) {

                if (i > 0) {
                    expression.push(RulesExpression.l`, `);
                }

                if (arguments[i] instanceof RulesValue) {
                    expression.push((arguments[i] as InternalRulesValue).__rulesValueAsExpression());
                } else if (arguments[i] instanceof RulesExpression) {
                    expression.push(arguments[i]);
                } else if (arguments[i] === null || arguments[i] === undefined) {
                    expression.push(RulesExpression.l`null`);
                } else {
                    expression.push(arguments[i]);
                }
            }

            const varsStack: any[] = this.__rulesFunctionsVars = this.__rulesFunctionsVars || [];
            varsStack.push({});

            const vars = this.__rulesFunctionVars = varsStack[varsStack.length - 1];

            const original = originalFunction.apply(this, arguments);

            varsStack.splice(varsStack.length - 1);
            this.__rulesFunctionVars = varsStack.length > 0 ? varsStack[varsStack.length - 1] : undefined;

            const newExpression = new RulesExpression(RulesExpression.l`${exportedName}(`, expression, RulesExpression.l`)`);

            if (original instanceof RulesValue) {
                const cloned = (original as any as InternalRulesValue).__rulesClone();
                (cloned as any as InternalRulesValue).__rulesExpression = newExpression;
                return cloned;
            }

            return newExpression;
        }

        // verify types and check for circular deps
        for (let i = 0; i < argsTypes.length; i++) {
            if (argsTypes[i] === undefined) {
                throw new Error(`Argument's ${i} type cannot be identified for func ${classConstructor.name}.${functionName}, maybe circular dependency?`);
            }
        }

        const bodyArgs = argsTypes.map(arg => new arg());

        // a function that produces expression with body of a rules function
        function body() {

            const args = [];

            for (let i = 0; i < arguments.length; i++) {
                if (arguments[i] instanceof RulesValue) {
                    const clone = (arguments[i] as InternalRulesValue).__rulesClone() as InternalRulesValue;
                    clone.__rulesAccessorName = argsNames[i];
                    args.push(clone);
                } else {
                    args.push(RulesExpression.l`${argsNames[i]}`);
                }
            }

            const varsStack: any[] = this.__rulesFunctionsVars = this.__rulesFunctionsVars || [];
            varsStack.push({});

            const vars = this.__rulesFunctionVars = varsStack[varsStack.length - 1];
            const functionResult = originalFunction.call(this, ...args);

            const result = {
                vars: vars,
                result: functionResult
            };

            varsStack.splice(varsStack.length - 1);
            this.__rulesFunctionVars = varsStack.length > 0 ? varsStack[varsStack.length - 1] : undefined;

            return result;
        }

        descriptor.value = newFunction;

        if (!classConstructor.__rulesMatchFunctions) {
            classConstructor.__rulesMatchFunctions = [];
        }

        classConstructor.__rulesMatchFunctions.push({
            name: exportedName,
            args: argsNames,
            global: !!targetClass.prototype,
            body: (thiz) => body.apply(thiz, bodyArgs)
        });
    }
}
