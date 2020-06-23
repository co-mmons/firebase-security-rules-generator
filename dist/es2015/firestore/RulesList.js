"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RulesList = void 0;
const RulesExpression_1 = require("../core/RulesExpression");
const RulesInteger_1 = require("./RulesInteger");
const RulesValue_1 = require("./RulesValue");
/**
 * List type. Items are not necessarily homogenous.
 */
class RulesList extends RulesValue_1.RulesValue {
    /**
     * Get the number of values in the list.
     *
     * {@link https://firebase.google.com/docs/reference/rules/rules.List#size}
     */
    size() {
        return new RulesInteger_1.RulesInteger(new RulesExpression_1.RulesExpression(this, RulesExpression_1.RulesExpression.l `.length`));
    }
}
exports.RulesList = RulesList;
//# sourceMappingURL=RulesList.js.map