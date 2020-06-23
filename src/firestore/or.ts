import {orExpression} from "../core/orExpression";
import {RulesExpression} from "../core/RulesExpression";
import {RulesValue} from "../core/RulesValue";
import {RulesBoolean} from "./RulesBoolean";

export function or(...parts: Array<RulesExpression | RulesValue | boolean>): RulesBoolean {
    return new RulesBoolean(orExpression(...parts));
}
