import { RulesExpression } from "../RulesExpression";
/**
 * @see https://firebase.google.com/docs/reference/rules/rules.String#split
 */
export function splitExpression(str, re) {
    return new RulesExpression(str, RulesExpression.l `.split(`, re, RulesExpression.l `)`);
}
//# sourceMappingURL=splitExpression.js.map