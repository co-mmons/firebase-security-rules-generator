import {RulesExpression} from "./RulesExpression";
import {RulesValue} from "./RulesValue";

type Value = RulesValue | RulesExpression | string | number | boolean;

export function ifElse<T = Value, F = Value>(trueExpression: RulesValue | RulesExpression, whenTrueValue: T, elseValue: F): T | F {
    return new RulesExpression(RulesExpression.l`(`, trueExpression, RulesExpression.l`) ? (`, whenTrueValue, RulesExpression.l`) : (`, elseValue, RulesExpression.l`)`) as unknown as T;
}
