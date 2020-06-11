"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.func = void 0;
var tslib_1 = require("tslib");
require("reflect-metadata");
var RulesValue_1 = require("./RulesValue");
var RulesExpression_1 = require("./RulesExpression");
function func() {
    return function (targetClass, functionName, descriptor) {
        var classConstructor = targetClass.constructor;
        var originalFunction = descriptor.value;
        var argsTypes = Reflect.getMetadata("design:paramtypes", targetClass, functionName);
        var args = argsTypes.map(function (arg) { return new arg(); });
        var argsNames = originalFunction.toString()
            .match(/\(\s*([^)]+?)\s*\)/)
            .map(function (v, i) { return i === 1 ? v.split(",").map(function (v) { return v.trim(); }) : v; })
            .find(function (value, index) { return index === 1; });
        var newFunction = function () {
            var expression = [];
            for (var i = 0; i < arguments.length; i++) {
                if (i > 0) {
                    expression.push(RulesExpression_1.RulesExpression.l(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject([", "], [", "]))));
                }
                if (arguments[i] instanceof RulesValue_1.RulesValue) {
                    expression.push(RulesExpression_1.RulesExpression.l(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["", ""], ["", ""])), arguments[i]));
                }
                else if (arguments[i] === null || arguments[i] === undefined) {
                    expression.push(RulesExpression_1.RulesExpression.l(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["null"], ["null"]))));
                }
                else {
                    expression.push(RulesExpression_1.RulesExpression.l(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["", ""], ["", ""])), arguments[i].toString()));
                }
            }
            return new RulesExpression_1.RulesExpression(RulesExpression_1.RulesExpression.l(templateObject_5 || (templateObject_5 = tslib_1.__makeTemplateObject(["", "("], ["", "("])), functionName), expression, RulesExpression_1.RulesExpression.l(templateObject_6 || (templateObject_6 = tslib_1.__makeTemplateObject([")"], [")"]))));
        };
        function body() {
            var args = [];
            for (var i = 0; i < arguments.length; i++) {
                if (arguments[i] instanceof RulesValue_1.RulesValue) {
                    var clone = arguments[i].__rulesClone();
                    clone.__rulesAccessorName = argsNames[i];
                    args.push(clone);
                }
                else {
                    args.push(arguments[i]);
                }
            }
            return originalFunction.call.apply(originalFunction, tslib_1.__spreadArrays([this], args));
        }
        descriptor.value = newFunction;
        if (!classConstructor.__rulesMatchFunctions) {
            classConstructor.__rulesMatchFunctions = [];
        }
        classConstructor.__rulesMatchFunctions.push({
            name: functionName,
            args: argsNames,
            body: function (thiz) { return new RulesExpression_1.RulesExpression(RulesExpression_1.RulesExpression.l(templateObject_7 || (templateObject_7 = tslib_1.__makeTemplateObject(["return "], ["return "]))), body.apply(thiz, args)); }
        });
    };
}
exports.func = func;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
//# sourceMappingURL=func.js.map