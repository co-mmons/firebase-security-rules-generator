import {RulesExpression} from "../RulesExpression";
import {RulesString} from "./RulesString";

export function substringExpression(baseString: RulesString | string, start: number, end: number) {
    return new RulesExpression(baseString, RulesExpression.l`[`, start, RulesExpression.l`:`, end, RulesExpression.l`]`);
}
