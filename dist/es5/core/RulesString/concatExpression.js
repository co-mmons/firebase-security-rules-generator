"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.concatExpression = void 0;
var tslib_1 = require("tslib");
var RulesExpression_1 = require("../RulesExpression");
function concatExpression() {
    var strings = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        strings[_i] = arguments[_i];
    }
    var expressions = [];
    for (var i = 0; i < strings.length; i++) {
        if (i > 0) {
            expressions.push(RulesExpression_1.RulesExpression.l(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject([" + "], [" + "]))));
        }
        expressions.push(strings[i]);
    }
    return new (RulesExpression_1.RulesExpression.bind.apply(RulesExpression_1.RulesExpression, tslib_1.__spreadArrays([void 0, RulesExpression_1.RulesExpression.l(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["("], ["("])))], expressions, [RulesExpression_1.RulesExpression.l(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject([")"], [")"])))])))();
}
exports.concatExpression = concatExpression;
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=concatExpression.js.map