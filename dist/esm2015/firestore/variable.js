import { RulesValue } from "./RulesValue";
export function variable(thiz, value) {
    if (value instanceof RulesValue) {
        const varId = "__var_" + (Object.keys(thiz.__rulesFunctionVars).length + 1);
        thiz.__rulesFunctionVars[varId] = value.__rulesValueAsExpression();
        value = value.__rulesClone();
        value.__rulesVarId = varId;
    }
    return value;
}
//# sourceMappingURL=variable.js.map