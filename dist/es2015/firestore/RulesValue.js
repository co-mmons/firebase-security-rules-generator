"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RulesValue = void 0;
const RulesExpression_1 = require("../core/RulesExpression");
const RulesValue_1 = require("../core/RulesValue");
const equals_1 = require("./equals");
const RulesBoolean_1 = require("./RulesBoolean");
class RulesValue extends RulesValue_1.RulesValue {
    isNotNull() {
        return new RulesBoolean_1.RulesBoolean(new RulesExpression_1.RulesExpression(this, RulesExpression_1.RulesExpression.l ` != null`));
    }
    isNull() {
        return new RulesBoolean_1.RulesBoolean(new RulesExpression_1.RulesExpression(this, RulesExpression_1.RulesExpression.l ` == null`));
    }
    equals(other, not) {
        return equals_1.equals(this, other, not);
    }
}
exports.RulesValue = RulesValue;
//# sourceMappingURL=RulesValue.js.map