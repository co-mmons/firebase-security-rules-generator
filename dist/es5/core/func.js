"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.func = void 0;
var tslib_1 = require("tslib");
require("reflect-metadata");
var RulesExpression_1 = require("./RulesExpression");
var RulesValue_1 = require("./RulesValue");
function func(options) {
    return function (targetClass, functionName, descriptor) {
        var classConstructor = targetClass.prototype ? targetClass : targetClass.constructor;
        var originalFunction = descriptor.value;
        var exportedName = (options === null || options === void 0 ? void 0 : options.exportedName) || (!!targetClass.prototype ? classConstructor.name + "_" + functionName : functionName);
        var argsTypes = Reflect.getMetadata("design:paramtypes", targetClass, functionName);
        var argsNames = (originalFunction.toString().match("^" + functionName + "\\(\\s*([^)]+?)\\s*\\)") || [])
            .map(function (v, i) { return i === 1 ? v.split(",").map(function (v) { return v.trim(); }) : v; })
            .find(function (value, index) { return index === 1; });
        var newFunction = function () {
            var expression = [];
            for (var i = 0; i < arguments.length; i++) {
                if (i > 0) {
                    expression.push(RulesExpression_1.RulesExpression.l(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject([", "], [", "]))));
                }
                if (arguments[i] instanceof RulesValue_1.RulesValue) {
                    expression.push(arguments[i].__rulesValueAsExpression());
                }
                else if (arguments[i] instanceof RulesExpression_1.RulesExpression) {
                    expression.push(arguments[i]);
                }
                else if (arguments[i] === null || arguments[i] === undefined) {
                    expression.push(RulesExpression_1.RulesExpression.l(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["null"], ["null"]))));
                }
                else {
                    expression.push(arguments[i]);
                }
            }
            return new RulesExpression_1.RulesExpression(RulesExpression_1.RulesExpression.l(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["", "("], ["", "("])), exportedName), expression, RulesExpression_1.RulesExpression.l(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject([")"], [")"]))));
        };
        var bodyArgs = argsTypes.map(function (arg) { return new arg(); });
        function body() {
            var args = [];
            for (var i = 0; i < arguments.length; i++) {
                if (arguments[i] instanceof RulesValue_1.RulesValue) {
                    var clone = arguments[i].__rulesClone();
                    clone.__rulesAccessorName = argsNames[i];
                    args.push(clone);
                }
                else {
                    args.push(RulesExpression_1.RulesExpression.l(templateObject_5 || (templateObject_5 = tslib_1.__makeTemplateObject(["", ""], ["", ""])), argsNames[i]));
                }
            }
            return originalFunction.call.apply(originalFunction, tslib_1.__spreadArrays([this], args));
        }
        descriptor.value = newFunction;
        if (!classConstructor.__rulesMatchFunctions) {
            classConstructor.__rulesMatchFunctions = [];
        }
        classConstructor.__rulesMatchFunctions.push({
            name: exportedName,
            args: argsNames,
            global: !!targetClass.prototype,
            body: function (thiz) { return new RulesExpression_1.RulesExpression(RulesExpression_1.RulesExpression.l(templateObject_6 || (templateObject_6 = tslib_1.__makeTemplateObject(["return "], ["return "]))), body.apply(thiz, bodyArgs)); }
        });
    };
}
exports.func = func;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
//# sourceMappingURL=func.js.map