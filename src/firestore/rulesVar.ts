import {RulesExpression} from "../core/RulesExpression";
import {InternalRulesValue} from "../internal";
import {RulesInteger} from "./RulesInteger";
import {RulesValue} from "./RulesValue";

let varCounter = 1;

export function rulesVar<T extends RulesValue | RulesExpression | string | boolean | number>(thiz: any, value: T): T {

    const varId = "__var_" + (varCounter++);

    if (value instanceof RulesValue) {
        thiz.__rulesFunctionVars[varId] = (value as any as InternalRulesValue).__rulesValueAsExpression();
        (value as any as InternalRulesValue).__rulesVarId = varId;
    } else if (value instanceof RulesExpression) {

    }

    return value;
}