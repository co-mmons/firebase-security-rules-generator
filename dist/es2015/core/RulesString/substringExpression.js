"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.substringExpression = void 0;
const RulesExpression_1 = require("../RulesExpression");
function substringExpression(baseString, start, end) {
    return new RulesExpression_1.RulesExpression(baseString, RulesExpression_1.RulesExpression.l `[`, start, RulesExpression_1.RulesExpression.l `:`, end, RulesExpression_1.RulesExpression.l `]`);
}
exports.substringExpression = substringExpression;
//# sourceMappingURL=substringExpression.js.map