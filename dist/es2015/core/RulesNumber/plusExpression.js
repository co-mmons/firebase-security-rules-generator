"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.plusExpression = void 0;
const RulesExpression_1 = require("../RulesExpression");
function plusExpression(left, right) {
    return new RulesExpression_1.RulesExpression(left, RulesExpression_1.RulesExpression.l ` + `, right);
}
exports.plusExpression = plusExpression;
//# sourceMappingURL=plusExpression.js.map