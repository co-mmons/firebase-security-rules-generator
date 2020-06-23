import {notExpression} from "../core/notExpression";
import {RulesExpression} from "../core/RulesExpression";
import {RulesValue} from "../core/RulesValue";
import {RulesBoolean} from "./RulesBoolean";

export function not(value: RulesExpression | RulesValue | boolean) {
    return new RulesBoolean(notExpression(value));
}
