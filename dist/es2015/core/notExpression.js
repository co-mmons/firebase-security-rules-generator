"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notExpression = void 0;
const RulesExpression_1 = require("./RulesExpression");
function notExpression(value) {
    return new RulesExpression_1.RulesExpression(RulesExpression_1.RulesExpression.l `!(`, value, RulesExpression_1.RulesExpression.l `)`);
}
exports.notExpression = notExpression;
//# sourceMappingURL=notExpression.js.map