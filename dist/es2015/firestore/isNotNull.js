"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNotNull = void 0;
const RulesExpression_1 = require("../core/RulesExpression");
function isNotNull(value) {
    return new RulesExpression_1.RulesExpression(RulesExpression_1.RulesExpression.l `(`, value, RulesExpression_1.RulesExpression.l ` != null`, RulesExpression_1.RulesExpression.l `)`);
}
exports.isNotNull = isNotNull;
//# sourceMappingURL=isNotNull.js.map