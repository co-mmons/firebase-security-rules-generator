"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.and = void 0;
var tslib_1 = require("tslib");
var RulesExpression_1 = require("./RulesExpression");
function and() {
    var parts = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        parts[_i] = arguments[_i];
    }
    var expression = [];
    if (parts.length > 1) {
        expression.push(RulesExpression_1.RulesExpression.l(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["("], ["("]))));
        if (parts.length > 2) {
            expression.push(RulesExpression_1.RulesExpression.identUp(), RulesExpression_1.RulesExpression.newLine());
        }
    }
    for (var i = 0; i < parts.length; i++) {
        if (i > 0) {
            expression.push(RulesExpression_1.RulesExpression.l(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject([" && "], [" && "]))));
            if (parts.length > 2) {
                expression.push(RulesExpression_1.RulesExpression.newLine());
            }
        }
        expression.push(parts[i]);
    }
    if (parts.length > 1) {
        if (parts.length > 2) {
            expression.push(RulesExpression_1.RulesExpression.identDown(), RulesExpression_1.RulesExpression.newLine());
        }
        expression.push(RulesExpression_1.RulesExpression.l(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject([")"], [")"]))));
    }
    return new (RulesExpression_1.RulesExpression.bind.apply(RulesExpression_1.RulesExpression, tslib_1.__spreadArrays([void 0], expression)))();
}
exports.and = and;
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=and.js.map