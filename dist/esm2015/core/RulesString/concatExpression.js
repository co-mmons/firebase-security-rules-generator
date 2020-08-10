import { RulesExpression } from "../RulesExpression";
export function concatExpression(...strings) {
    const expressions = [];
    for (let i = 0; i < strings.length; i++) {
        if (i > 0) {
            expressions.push(RulesExpression.l ` + `);
        }
        expressions.push(strings[i]);
    }
    return new RulesExpression(RulesExpression.l `(`, ...expressions, RulesExpression.l `)`);
}
//# sourceMappingURL=concatExpression.js.map