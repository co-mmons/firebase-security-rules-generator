import {InternalRulesValue} from "../internal";
import {RulesExpression} from "./RulesExpression";
import {RulesValue} from "./RulesValue";

export function whenTrue<T extends RulesValue | RulesExpression>(trueExpression: RulesValue | RulesExpression, whenTrueValue: T) {

    if (whenTrueValue instanceof RulesExpression) {
        return new RulesExpression(RulesExpression.l`(`, trueExpression, RulesExpression.l`) ? (`, whenTrueValue, RulesExpression.l`) : null`);
    } else if (whenTrueValue instanceof RulesValue) {
        const clone = (whenTrueValue as any as InternalRulesValue).__rulesClone();
        const internal = whenTrueValue as any as InternalRulesValue;
        clone.__rulesExpression = new RulesExpression(RulesExpression.l`(`, RulesExpression.l`(`, trueExpression, RulesExpression.l`) ? (`, internal.__rulesValueAsExpression(), RulesExpression.l`) : null`, RulesExpression.l`)`);
        return clone;
    }
}
