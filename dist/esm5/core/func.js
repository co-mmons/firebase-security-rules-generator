import { __makeTemplateObject, __spreadArrays } from "tslib";
import "reflect-metadata";
import { RulesExpression } from "./RulesExpression";
import { RulesValue } from "./RulesValue";
export function func() {
    return function (targetClass, functionName, descriptor) {
        var classConstructor = targetClass.constructor;
        var originalFunction = descriptor.value;
        var argsTypes = Reflect.getMetadata("design:paramtypes", targetClass, functionName);
        var argsNames = originalFunction.toString()
            .match(/\(\s*([^)]+?)\s*\)/)
            .map(function (v, i) { return i === 1 ? v.split(",").map(function (v) { return v.trim(); }) : v; })
            .find(function (value, index) { return index === 1; });
        var newFunction = function () {
            var expression = [];
            for (var i = 0; i < arguments.length; i++) {
                if (i > 0) {
                    expression.push(RulesExpression.l(templateObject_1 || (templateObject_1 = __makeTemplateObject([", "], [", "]))));
                }
                if (arguments[i] instanceof RulesValue) {
                    expression.push(arguments[i].__rulesValueAsExpression());
                }
                else if (arguments[i] instanceof RulesExpression) {
                    expression.push(arguments[i]);
                }
                else if (arguments[i] === null || arguments[i] === undefined) {
                    expression.push(RulesExpression.l(templateObject_2 || (templateObject_2 = __makeTemplateObject(["null"], ["null"]))));
                }
                else {
                    expression.push(RulesExpression.l(templateObject_3 || (templateObject_3 = __makeTemplateObject(["", ""], ["", ""])), arguments[i].toString()));
                }
            }
            return new RulesExpression(RulesExpression.l(templateObject_4 || (templateObject_4 = __makeTemplateObject(["", "("], ["", "("])), functionName), expression, RulesExpression.l(templateObject_5 || (templateObject_5 = __makeTemplateObject([")"], [")"]))));
        };
        var bodyArgs = argsTypes.map(function (arg) { return new arg(); });
        function body() {
            var args = [];
            for (var i = 0; i < arguments.length; i++) {
                if (arguments[i] instanceof RulesValue) {
                    var clone = arguments[i].__rulesClone();
                    clone.__rulesAccessorName = argsNames[i];
                    args.push(clone);
                }
                else {
                    args.push(arguments[i]);
                }
            }
            return originalFunction.call.apply(originalFunction, __spreadArrays([this], args));
        }
        descriptor.value = newFunction;
        if (!classConstructor.__rulesMatchFunctions) {
            classConstructor.__rulesMatchFunctions = [];
        }
        classConstructor.__rulesMatchFunctions.push({
            name: functionName,
            args: argsNames,
            body: function (thiz) { return new RulesExpression(RulesExpression.l(templateObject_6 || (templateObject_6 = __makeTemplateObject(["return "], ["return "]))), body.apply(thiz, bodyArgs)); }
        });
    };
}
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
//# sourceMappingURL=func.js.map