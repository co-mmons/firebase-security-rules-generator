import { RulesExpression } from "./RulesExpression";
import { RulesValue } from "./RulesValue";
export function whenTrue(trueExpression, whenTrueValue) {
    if (whenTrueValue instanceof RulesExpression) {
        return new RulesExpression(RulesExpression.l `(`, trueExpression, RulesExpression.l `) ? (`, whenTrueValue, RulesExpression.l `) : null`);
    }
    else if (whenTrueValue instanceof RulesValue) {
        const clone = whenTrueValue.__rulesClone();
        const internal = whenTrueValue;
        clone.__rulesExpression = new RulesExpression(RulesExpression.l `(`, RulesExpression.l `(`, trueExpression, RulesExpression.l `) ? (`, internal.__rulesValueAsExpression(), RulesExpression.l `) : null`, RulesExpression.l `)`);
        return clone;
    }
    else {
        throw new Error("Invalid expression: whenTrue only accepts RulesValue or RulesExpression");
    }
}
//# sourceMappingURL=whenTrue.js.map