import {RulesExpression} from "./RulesExpression";
import {RulesValue} from "./RulesValue";

type Value = RulesValue | RulesExpression | string | number | boolean;

export function ifElse(trueExpression: RulesValue | RulesExpression, whenTrueValue: Value, elseValue: Value): RulesValue {
    return new RulesValue(new RulesExpression(RulesExpression.l`(`, trueExpression, RulesExpression.l`) ? (`, whenTrueValue, RulesExpression.l`) : (`, elseValue, RulesExpression.l`)`));
}
