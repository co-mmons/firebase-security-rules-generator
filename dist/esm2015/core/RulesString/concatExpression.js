import { RulesExpression } from "../RulesExpression";
export function concatExpression(baseString, otherString) {
    return new RulesExpression(RulesExpression.l `(`, baseString, RulesExpression.l ` + `, otherString, RulesExpression.l `)`);
}
//# sourceMappingURL=concatExpression.js.map