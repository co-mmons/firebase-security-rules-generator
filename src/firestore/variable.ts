import {RulesExpression} from "../core/RulesExpression";
import {InternalRulesValue} from "../internal";
import {RulesValue} from "./RulesValue";

let varCounter = 1;

export function variable<T extends RulesValue | RulesExpression | string | boolean | number>(thiz: any, value: T): T {

    const varId = "__var_" + (varCounter++);

    if (value instanceof RulesValue) {
        thiz.__rulesFunctionVars[varId] = (value as any as InternalRulesValue).__rulesValueAsExpression();
        value = (value as any as InternalRulesValue).__rulesClone();
        (value as any as InternalRulesValue).__rulesVarId = varId;
    }

    return value;
}