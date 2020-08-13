"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gtExpression = void 0;
const RulesExpression_1 = require("../RulesExpression");
function gtExpression(left, right) {
    return new RulesExpression_1.RulesExpression(left, RulesExpression_1.RulesExpression.l ` > `, right);
}
exports.gtExpression = gtExpression;
//# sourceMappingURL=gtExpression.js.map