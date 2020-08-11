import "reflect-metadata";
import { RulesExpression } from "./RulesExpression";
import { RulesValue } from "./RulesValue";
export function func(options) {
    return function (targetClass, functionName, descriptor) {
        const classConstructor = targetClass.prototype ? targetClass : targetClass.constructor;
        const originalFunction = descriptor.value;
        const exportedName = (options === null || options === void 0 ? void 0 : options.exportedName) || (!!targetClass.prototype ? `${classConstructor.name}_${functionName}` : functionName);
        const argsTypes = Reflect.getMetadata("design:paramtypes", targetClass, functionName);
        const argsNames = (originalFunction.toString().match(`^${functionName}\\(\\s*([^)]+?)\\s*\\)`) || [])
            .map((v, i) => i === 1 ? v.split(",").map(v => v.trim()) : v)
            .find((value, index) => index === 1);
        const newFunction = function () {
            const expression = [];
            for (let i = 0; i < arguments.length; i++) {
                if (i > 0) {
                    expression.push(RulesExpression.l `, `);
                }
                if (arguments[i] instanceof RulesValue) {
                    expression.push(arguments[i].__rulesValueAsExpression());
                }
                else if (arguments[i] instanceof RulesExpression) {
                    expression.push(arguments[i]);
                }
                else if (arguments[i] === null || arguments[i] === undefined) {
                    expression.push(RulesExpression.l `null`);
                }
                else {
                    expression.push(arguments[i]);
                }
            }
            const original = originalFunction.call(this, ...arguments);
            const newExpression = new RulesExpression(RulesExpression.l `${exportedName}(`, expression, RulesExpression.l `)`);
            if (original instanceof RulesValue) {
                const cloned = original.__rulesClone();
                cloned.__rulesExpression = newExpression;
                return cloned;
            }
            return newExpression;
        };
        const bodyArgs = argsTypes.map(arg => new arg());
        function body() {
            const args = [];
            for (let i = 0; i < arguments.length; i++) {
                if (arguments[i] instanceof RulesValue) {
                    const clone = arguments[i].__rulesClone();
                    clone.__rulesAccessorName = argsNames[i];
                    args.push(clone);
                }
                else {
                    args.push(RulesExpression.l `${argsNames[i]}`);
                }
            }
            const varsStack = this.__rulesFunctionsVars = this.__rulesFunctionsVars || [];
            varsStack.push({});
            const vars = this.__rulesFunctionVars = varsStack[varsStack.length - 1];
            const functionResult = originalFunction.call(this, ...args);
            const result = {
                vars: vars,
                result: functionResult
            };
            varsStack.splice(varsStack.length - 1);
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
    };
}
//# sourceMappingURL=func.js.map