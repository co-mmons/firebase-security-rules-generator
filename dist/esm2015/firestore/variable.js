import { RulesExpression } from "../core/RulesExpression";
import { RulesValue } from "./RulesValue";
let varCounter = 1;
export function variable(thiz, value) {
    const varId = "__var_" + (varCounter++);
    if (value instanceof RulesValue) {
        thiz.__rulesFunctionVars[varId] = value.__rulesValueAsExpression();
        value = value.__rulesClone();
        value.__rulesVarId = varId;
    }
    else if (value instanceof RulesExpression) {
    }
    return value;
}
//# sourceMappingURL=variable.js.map