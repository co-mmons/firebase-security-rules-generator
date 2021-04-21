import { RulesExpression } from "./RulesExpression";
export function ifElse(trueExpression, whenTrueValue, elseValue) {
    return new RulesExpression(RulesExpression.l `(`, trueExpression, RulesExpression.l `) ? (`, whenTrueValue, RulesExpression.l `) : (`, elseValue, RulesExpression.l `)`);
}
//# sourceMappingURL=ifElse.js.map