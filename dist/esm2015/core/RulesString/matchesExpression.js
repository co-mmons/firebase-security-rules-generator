import { RulesExpression } from "../RulesExpression";
/**
 * @see https://firebase.google.com/docs/reference/rules/rules.String#matches
 */
export function matchesExpression(str, re) {
    return new RulesExpression(str, RulesExpression.l `.matches(`, re, RulesExpression.l `)`);
}
//# sourceMappingURL=matchesExpression.js.map