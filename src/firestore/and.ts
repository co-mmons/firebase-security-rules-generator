import {andExpression} from "../core/andExpression";
import {RulesExpression} from "../core/RulesExpression";
import {RulesValue} from "../core/RulesValue";
import {RulesBoolean} from "./RulesBoolean";

export function and(...parts: Array<RulesExpression | RulesValue | boolean>) {
    return new RulesBoolean(andExpression(...parts));
}
