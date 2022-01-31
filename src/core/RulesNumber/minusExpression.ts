import {RulesExpression} from "../RulesExpression";
import {RulesNumber} from "./RulesNumber";

export function minusExpression(left: RulesNumber | number, right: RulesNumber | number) {
    return new RulesExpression(left, RulesExpression.l` - `, right);
}
