import {RulesExpression} from "../core/RulesExpression";
import {RulesValue} from "./RulesValue";

export function isNotNull(value: RulesValue | RulesExpression | string | boolean | number) {
    return new RulesExpression(RulesExpression.l`(`, value, RulesExpression.l` != null`, RulesExpression.l`)`);
}
