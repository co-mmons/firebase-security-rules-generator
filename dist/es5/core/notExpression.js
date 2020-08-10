"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notExpression = void 0;
var tslib_1 = require("tslib");
var RulesExpression_1 = require("./RulesExpression");
function notExpression(value) {
    return new RulesExpression_1.RulesExpression(RulesExpression_1.RulesExpression.l(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["!("], ["!("]))), value, RulesExpression_1.RulesExpression.l(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject([")"], [")"]))));
}
exports.notExpression = notExpression;
var templateObject_1, templateObject_2;
//# sourceMappingURL=notExpression.js.map