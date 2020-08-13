"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.whenTrue = void 0;
const RulesExpression_1 = require("./RulesExpression");
const RulesValue_1 = require("./RulesValue");
function whenTrue(trueExpression, whenTrueValue) {
    if (whenTrueValue instanceof RulesExpression_1.RulesExpression) {
        return new RulesExpression_1.RulesExpression(RulesExpression_1.RulesExpression.l `(`, trueExpression, RulesExpression_1.RulesExpression.l `) ? (`, whenTrueValue, RulesExpression_1.RulesExpression.l `) : null`);
    }
    else if (whenTrueValue instanceof RulesValue_1.RulesValue) {
        const clone = whenTrueValue.__rulesClone();
        const internal = whenTrueValue;
        clone.__rulesExpression = new RulesExpression_1.RulesExpression(RulesExpression_1.RulesExpression.l `(`, RulesExpression_1.RulesExpression.l `(`, trueExpression, RulesExpression_1.RulesExpression.l `) ? (`, internal.__rulesValueAsExpression(), RulesExpression_1.RulesExpression.l `) : null`, RulesExpression_1.RulesExpression.l `)`);
        return clone;
    }
    else {
        throw new Error("Invalid expression: whenTrue only accepts RulesValue or RulesExpression");
    }
}
exports.whenTrue = whenTrue;
//# sourceMappingURL=whenTrue.js.map