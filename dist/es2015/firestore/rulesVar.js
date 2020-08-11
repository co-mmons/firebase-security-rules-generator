"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rulesVar = void 0;
const RulesExpression_1 = require("../core/RulesExpression");
const RulesValue_1 = require("./RulesValue");
let varCounter = 1;
function rulesVar(thiz, value) {
    const varId = "__var_" + (varCounter++);
    if (value instanceof RulesValue_1.RulesValue) {
        thiz.__rulesFunctionVars[varId] = value.__rulesValueAsExpression();
        value.__rulesVarId = varId;
    }
    else if (value instanceof RulesExpression_1.RulesExpression) {
    }
    return value;
}
exports.rulesVar = rulesVar;
//# sourceMappingURL=rulesVar.js.map