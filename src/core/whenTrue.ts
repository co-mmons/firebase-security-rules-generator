import {InternalRulesValue} from "../internal";
import {RulesExpression} from "./RulesExpression";
import {RulesValue} from "./RulesValue";

export function whenTrue<T extends RulesValue>(trueExpression: RulesValue | RulesExpression, whenTrueValue: T): T;

export function whenTrue(trueExpression: RulesValue | RulesExpression, whenTrueValue: RulesExpression): RulesValue;

export function whenTrue(trueExpression: RulesValue | RulesExpression, whenTrueValue: RulesExpression | RulesValue): RulesValue {

    if (whenTrueValue instanceof RulesExpression) {
        return new RulesValue(new RulesExpression(RulesExpression.l`(`, trueExpression, RulesExpression.l`) ? (`, whenTrueValue, RulesExpression.l`) : null`));
    } else if (whenTrueValue instanceof RulesValue) {
        const clone = (whenTrueValue as any as InternalRulesValue).__rulesClone();
        const internal = whenTrueValue as any as InternalRulesValue;
        clone.__rulesExpression = new RulesExpression(RulesExpression.l`(`, RulesExpression.l`(`, trueExpression, RulesExpression.l`) ? (`, internal.__rulesValueAsExpression(), RulesExpression.l`) : null`, RulesExpression.l`)`);
        return clone;
    } else {
        throw new Error("Invalid expression: whenTrue only accepts RulesValue or RulesExpression");
    }
}
