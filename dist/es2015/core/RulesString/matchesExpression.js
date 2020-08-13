"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.matchesExpression = void 0;
const RulesExpression_1 = require("../RulesExpression");
/**
 * @see https://firebase.google.com/docs/reference/rules/rules.String#matches
 */
function matchesExpression(str, re) {
    return new RulesExpression_1.RulesExpression(str, RulesExpression_1.RulesExpression.l `.matches(`, re, RulesExpression_1.RulesExpression.l `)`);
}
exports.matchesExpression = matchesExpression;
//# sourceMappingURL=matchesExpression.js.map