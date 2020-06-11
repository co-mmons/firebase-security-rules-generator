"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.concatExpression = void 0;
var tslib_1 = require("tslib");
var RulesExpression_1 = require("../RulesExpression");
function concatExpression(baseString, otherString) {
    return new RulesExpression_1.RulesExpression(RulesExpression_1.RulesExpression.l(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["("], ["("]))), baseString, RulesExpression_1.RulesExpression.l(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject([" + "], [" + "]))), otherString, RulesExpression_1.RulesExpression.l(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject([")"], [")"]))));
}
exports.concatExpression = concatExpression;
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=concatExpression.js.map