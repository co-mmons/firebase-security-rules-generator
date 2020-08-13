"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gteExpression = void 0;
const RulesExpression_1 = require("../RulesExpression");
function gteExpression(left, right) {
    return new RulesExpression_1.RulesExpression(left, RulesExpression_1.RulesExpression.l ` >= `, right);
}
exports.gteExpression = gteExpression;
//# sourceMappingURL=gteExpression.js.map