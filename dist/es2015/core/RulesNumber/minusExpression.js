"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.minusExpression = void 0;
const RulesExpression_1 = require("../RulesExpression");
function minusExpression(left, right) {
    return new RulesExpression_1.RulesExpression(left, RulesExpression_1.RulesExpression.l ` - `, right);
}
exports.minusExpression = minusExpression;
//# sourceMappingURL=minusExpression.js.map