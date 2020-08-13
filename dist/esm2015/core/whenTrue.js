import { RulesExpression } from "./RulesExpression";
import { RulesValue } from "./RulesValue";
export function whenTrue(trueExpression, whenTrueValue) {
    if (whenTrueValue instanceof RulesExpression) {
        return new RulesExpression(RulesExpression.l `(`, trueExpression, RulesExpression.l `) ? (`, whenTrueValue, RulesExpression.l `) : null`);
    }
    else if (whenTrueValue instanceof RulesValue) {
        const clone = whenTrueValue.__rulesClone();
        const internal = clone;
        internal.__rulesExpression = new RulesExpression(RulesExpression.l `(`, trueExpression, RulesExpression.l `) ? (`, internal.__rulesValueAsExpression(), RulesExpression.l `) : null`);
        return internal;
    }
}
//# sourceMappingURL=whenTrue.js.map