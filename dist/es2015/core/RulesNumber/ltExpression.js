"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ltExpression = void 0;
const RulesExpression_1 = require("../RulesExpression");
function ltExpression(left, right) {
    return new RulesExpression_1.RulesExpression(left, RulesExpression_1.RulesExpression.l ` < `, right);
}
exports.ltExpression = ltExpression;
//# sourceMappingURL=ltExpression.js.map