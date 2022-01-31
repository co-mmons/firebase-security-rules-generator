"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lteExpression = void 0;
const RulesExpression_1 = require("../RulesExpression");
function lteExpression(left, right) {
    return new RulesExpression_1.RulesExpression(left, RulesExpression_1.RulesExpression.l ` <= `, right);
}
exports.lteExpression = lteExpression;
//# sourceMappingURL=lteExpression.js.map