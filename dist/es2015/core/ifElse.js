"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ifElse = void 0;
const RulesExpression_1 = require("./RulesExpression");
function ifElse(trueExpression, whenTrueValue, elseValue) {
    return new RulesExpression_1.RulesExpression(RulesExpression_1.RulesExpression.l `(`, trueExpression, RulesExpression_1.RulesExpression.l `) ? (`, whenTrueValue, RulesExpression_1.RulesExpression.l `) : (`, elseValue, RulesExpression_1.RulesExpression.l `)`);
}
exports.ifElse = ifElse;
//# sourceMappingURL=ifElse.js.map