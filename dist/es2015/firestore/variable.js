"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.variable = void 0;
const RulesValue_1 = require("./RulesValue");
function variable(thiz, value) {
    if (value instanceof RulesValue_1.RulesValue) {
        const varId = "__var_" + (Object.keys(thiz.__rulesFunctionVars).length + 1);
        thiz.__rulesFunctionVars[varId] = value.__rulesValueAsExpression();
        value = value.__rulesClone();
        value.__rulesVarId = varId;
    }
    return value;
}
exports.variable = variable;
//# sourceMappingURL=variable.js.map