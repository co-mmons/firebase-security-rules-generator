import {RulesExpression} from "../RulesExpression";
import {RulesString} from "./RulesString";

export function trimExpression(str: RulesString | string) {
    return new RulesExpression(str, RulesExpression.l`.trim()`);
}
