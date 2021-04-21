"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ifElse = void 0;
const RulesExpression_1 = require("./RulesExpression");
const RulesValue_1 = require("./RulesValue");
function ifElse(trueExpression, whenTrueValue, elseValue) {
    return new RulesValue_1.RulesValue(new RulesExpression_1.RulesExpression(RulesExpression_1.RulesExpression.l `(`, trueExpression, RulesExpression_1.RulesExpression.l `) ? (`, whenTrueValue, RulesExpression_1.RulesExpression.l `) : (`, elseValue, RulesExpression_1.RulesExpression.l `)`));
}
exports.ifElse = ifElse;
//# sourceMappingURL=ifElse.js.map