"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.equals = void 0;
var tslib_1 = require("tslib");
var RulesExpression_1 = require("./RulesExpression");
function equals(left, right) {
    return new RulesExpression_1.RulesExpression(left, RulesExpression_1.RulesExpression.l(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject([" == "], [" == "]))), right);
}
exports.equals = equals;
var templateObject_1;
//# sourceMappingURL=equals.js.map