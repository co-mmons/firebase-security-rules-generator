"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.equals = void 0;
const RulesExpression_1 = require("./RulesExpression");
function equals(left, right) {
    return new RulesExpression_1.RulesExpression(left, RulesExpression_1.RulesExpression.l ` == `, right);
}
exports.equals = equals;
//# sourceMappingURL=equals.js.map