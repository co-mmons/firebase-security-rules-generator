"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RulesBoolean = void 0;
const RulesExpression_1 = require("../core/RulesExpression");
const not_1 = require("./not");
const RulesValue_1 = require("./RulesValue");
/**
 *  Type representing a boolean value, true or false.
 *
 *  @link https://firebase.google.com/docs/reference/rules/rules.Boolean
 */
class RulesBoolean extends RulesValue_1.RulesValue {
    /**
     * Negative value of this boolean.
     */
    not() {
        return (0, not_1.not)(this);
    }
}
exports.RulesBoolean = RulesBoolean;
(function (RulesBoolean) {
    /**
     * Convert string into boolean.
     */
    function value(value) {
        return new RulesBoolean(new RulesExpression_1.RulesExpression(RulesExpression_1.RulesExpression.l `bool(`, value, RulesExpression_1.RulesExpression.l `)`));
    }
    RulesBoolean.value = value;
})(RulesBoolean = exports.RulesBoolean || (exports.RulesBoolean = {}));
//# sourceMappingURL=RulesBoolean.js.map