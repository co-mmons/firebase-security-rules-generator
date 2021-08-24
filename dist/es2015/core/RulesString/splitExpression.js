"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.splitExpression = void 0;
const RulesExpression_1 = require("../RulesExpression");
/**
 * @see https://firebase.google.com/docs/reference/rules/rules.String#split
 */
function splitExpression(str, re) {
    return new RulesExpression_1.RulesExpression(str, RulesExpression_1.RulesExpression.l `.split(`, re, RulesExpression_1.RulesExpression.l `)`);
}
exports.splitExpression = splitExpression;
//# sourceMappingURL=splitExpression.js.map