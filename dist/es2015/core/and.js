"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.and = void 0;
const RulesExpression_1 = require("./RulesExpression");
function and(...parts) {
    const expression = [];
    if (parts.length > 1) {
        expression.push(RulesExpression_1.RulesExpression.l `(`);
        if (parts.length > 2) {
            expression.push(RulesExpression_1.RulesExpression.identUp(), RulesExpression_1.RulesExpression.newLine());
        }
    }
    for (let i = 0; i < parts.length; i++) {
        if (i > 0) {
            expression.push(RulesExpression_1.RulesExpression.l ` && `);
            if (parts.length > 2) {
                expression.push(RulesExpression_1.RulesExpression.newLine());
            }
        }
        expression.push(parts[i]);
    }
    if (parts.length > 1) {
        if (parts.length > 2) {
            expression.push(RulesExpression_1.RulesExpression.identDown(), RulesExpression_1.RulesExpression.newLine());
        }
        expression.push(RulesExpression_1.RulesExpression.l `)`);
    }
    return new RulesExpression_1.RulesExpression(...expression);
}
exports.and = and;
//# sourceMappingURL=and.js.map