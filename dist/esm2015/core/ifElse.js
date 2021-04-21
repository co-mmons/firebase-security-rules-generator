import { RulesExpression } from "./RulesExpression";
import { RulesValue } from "./RulesValue";
export function ifElse(trueExpression, whenTrueValue, elseValue) {
    return new RulesValue(new RulesExpression(RulesExpression.l `(`, trueExpression, RulesExpression.l `) ? (`, whenTrueValue, RulesExpression.l `) : (`, elseValue, RulesExpression.l `)`));
}
//# sourceMappingURL=ifElse.js.map