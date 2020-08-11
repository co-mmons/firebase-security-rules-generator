import { RulesExpression } from "../core/RulesExpression";
import { RulesValue } from "./RulesValue";
let varCounter = 1;
export function rulesVar(thiz, value) {
    const varId = "__var_" + (varCounter++);
    if (value instanceof RulesValue) {
        thiz.__rulesFunctionVars[varId] = value.__rulesValueAsExpression();
        value.__rulesVarId = varId;
    }
    else if (value instanceof RulesExpression) {
    }
    return value;
}
//# sourceMappingURL=rulesVar.js.map