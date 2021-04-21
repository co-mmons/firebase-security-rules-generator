"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNull = void 0;
const RulesExpression_1 = require("../core/RulesExpression");
function isNull(value) {
    return new RulesExpression_1.RulesExpression(RulesExpression_1.RulesExpression.l `(`, value, RulesExpression_1.RulesExpression.l ` == null`, RulesExpression_1.RulesExpression.l `)`);
}
exports.isNull = isNull;
//# sourceMappingURL=isNull.js.map