import {RulesExpression} from "../RulesExpression";
import {RulesString} from "./RulesString";

export function trimExpression(baseString: RulesString | string) {
    return new RulesExpression(baseString, RulesExpression.l`.trim()`);
}
