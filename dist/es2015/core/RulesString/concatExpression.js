"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.concatExpression = void 0;
const RulesExpression_1 = require("../RulesExpression");
function concatExpression(...strings) {
    const expressions = [];
    for (let i = 0; i < strings.length; i++) {
        if (i > 0) {
            expressions.push(RulesExpression_1.RulesExpression.l ` + `);
        }
        expressions.push(strings[i]);
    }
    return new RulesExpression_1.RulesExpression(RulesExpression_1.RulesExpression.l `(`, ...expressions, RulesExpression_1.RulesExpression.l `)`);
}
exports.concatExpression = concatExpression;
//# sourceMappingURL=concatExpression.js.map