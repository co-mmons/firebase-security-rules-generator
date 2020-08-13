import {RulesExpression} from "../RulesExpression";
import {RulesString} from "./RulesString";

export function sizeExpression(str: RulesString | string) {
    return new RulesExpression(str, RulesExpression.l`.size()`);
}
