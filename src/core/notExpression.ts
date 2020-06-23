import {RulesExpression} from "./RulesExpression";
import {RulesValue} from "./RulesValue";

export function notExpression(value: RulesExpression | RulesValue | boolean) {
    return new RulesExpression(RulesExpression.l`!(`, value, RulesExpression.l`)`);
}
