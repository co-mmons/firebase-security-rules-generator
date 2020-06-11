"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.func = void 0;
require("reflect-metadata");
const RulesValue_1 = require("./RulesValue");
const RulesExpression_1 = require("./RulesExpression");
function func() {
    return function (targetClass, functionName, descriptor) {
        const classConstructor = targetClass.constructor;
        const originalFunction = descriptor.value;
        const argsTypes = Reflect.getMetadata("design:paramtypes", targetClass, functionName);
        const args = argsTypes.map(arg => new arg());
        const argsNames = originalFunction.toString()
            .match(/\(\s*([^)]+?)\s*\)/)
            .map((v, i) => i === 1 ? v.split(",").map(v => v.trim()) : v)
            .find((value, index) => index === 1);
        const newFunction = function () {
            const expression = [];
            for (let i = 0; i < arguments.length; i++) {
                if (i > 0) {
                    expression.push(RulesExpression_1.RulesExpression.l `, `);
                }
                if (arguments[i] instanceof RulesValue_1.RulesValue) {
                    expression.push(RulesExpression_1.RulesExpression.l `${arguments[i]}`);
                }
                else if (arguments[i] === null || arguments[i] === undefined) {
                    expression.push(RulesExpression_1.RulesExpression.l `null`);
                }
                else {
                    expression.push(RulesExpression_1.RulesExpression.l `${arguments[i].toString()}`);
                }
            }
            return new RulesExpression_1.RulesExpression(RulesExpression_1.RulesExpression.l `${functionName}(`, expression, RulesExpression_1.RulesExpression.l `)`);
        };
        function body() {
            const args = [];
            for (let i = 0; i < arguments.length; i++) {
                if (arguments[i] instanceof RulesValue_1.RulesValue) {
                    const clone = arguments[i].__rulesClone();
                    clone.__rulesAccessorName = argsNames[i];
                    args.push(clone);
                }
                else {
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
            body: (thiz) => new RulesExpression_1.RulesExpression(RulesExpression_1.RulesExpression.l `return `, body.apply(thiz, args))
        });
    };
}
exports.func = func;
//# sourceMappingURL=func.js.map