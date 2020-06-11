import {RulesExpression} from "../RulesExpression";
import {RulesString} from "./RulesString";

export function concatExpression(baseString: RulesString | string, otherString: RulesString | string) {
    return new RulesExpression(RulesExpression.l`(`, baseString, RulesExpression.l` + `, otherString, RulesExpression.l`)`);
}
