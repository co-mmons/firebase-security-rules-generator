import {RulesExpression} from "../core/RulesExpression";
import {InternalRulesValue} from "../internal";
import {RulesValue} from "./RulesValue";

export function variable<T extends RulesValue | RulesExpression | string | boolean | number>(thiz: any, value: T): T {

    if (value instanceof RulesValue) {
        const varId = "__var_" + (Object.keys(thiz.__rulesFunctionVars).length + 1);
        thiz.__rulesFunctionVars[varId] = (value as any as InternalRulesValue).__rulesValueAsExpression();
        value = (value as any as InternalRulesValue).__rulesClone();
        (value as any as InternalRulesValue).__rulesVarId = varId;
    }

    return value;
}