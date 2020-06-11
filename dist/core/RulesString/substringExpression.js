"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.substringExpression = void 0;
var tslib_1 = require("tslib");
var RulesExpression_1 = require("../RulesExpression");
function substringExpression(baseString, start, end) {
    return new RulesExpression_1.RulesExpression(baseString, RulesExpression_1.RulesExpression.l(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["["], ["["]))), start, RulesExpression_1.RulesExpression.l(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject([":"], [":"]))), end, RulesExpression_1.RulesExpression.l(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["]"], ["]"]))));
}
exports.substringExpression = substringExpression;
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=substringExpression.js.map