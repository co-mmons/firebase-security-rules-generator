"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.concatExpression = void 0;
const RulesExpression_1 = require("../RulesExpression");
function concatExpression(baseString, otherString) {
    return new RulesExpression_1.RulesExpression(RulesExpression_1.RulesExpression.l `(`, baseString, RulesExpression_1.RulesExpression.l ` + `, otherString, RulesExpression_1.RulesExpression.l `)`);
}
exports.concatExpression = concatExpression;
//# sourceMappingURL=concatExpression.js.map