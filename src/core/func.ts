import "reflect-metadata";
import {RulesValue} from "./RulesValue";
import {InternalMatchConstructor, InternalRulesValue} from "../internal";
import {RulesExpression} from "./RulesExpression";

export function func() {

    return function (targetClass: any, functionName: string, descriptor: PropertyDescriptor) {

        const classConstructor: InternalMatchConstructor = targetClass.constructor;
        const originalFunction: Function = descriptor.value;

        const argsTypes: any[] = Reflect.getMetadata("design:paramtypes", targetClass, functionName);
        const args = argsTypes.map(arg => new arg());
        const argsNames = originalFunction.toString()
            .match(/\(\s*([^)]+?)\s*\)/)
            .map((v, i) => i === 1 ? v.split(",").map(v => v.trim()) : v)
            .find((value, index) => index === 1) as string[];

        const newFunction = function () {

            const expression = [];

            for (let i = 0; i < arguments.length; i++) {

                if (i > 0) {
                    expression.push(RulesExpression.l`, `);
                }

                if (arguments[i] instanceof RulesValue) {
                    expression.push(RulesExpression.l`${arguments[i]}`);
                } else if (arguments[i] === null || arguments[i] === undefined) {
                    expression.push(RulesExpression.l`null`);
                } else {
                    expression.push(RulesExpression.l`${arguments[i].toString()}`);
                }
            }

            return new RulesExpression(RulesExpression.l`${functionName}(`, expression, RulesExpression.l`)`);
        }

        function body() {

            const args = [];

            for (let i = 0; i < arguments.length; i++) {
                if (arguments[i] instanceof RulesValue) {
                    const clone = (arguments[i] as InternalRulesValue).__rulesClone() as InternalRulesValue;
                    clone.__rulesAccessorName = argsNames[i];
                    args.push(clone);
                } else {
                    args.push(arguments[i]);
                }
            }

            return originalFunction.call(this, ...args);
        }

        descriptor.value = newFunction;

        if (!classConstructor.__rulesMatchFunctions) {
            classConstructor.__rulesMatchFunctions = [];
        }

        classConstructor.__rulesMatchFunctions.push({
            name: functionName,
            args: argsNames,
            body: (thiz) => new RulesExpression(RulesExpression.l`return `, body.apply(thiz, args))
        });
    }
}
