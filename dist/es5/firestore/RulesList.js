"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RulesList = void 0;
var tslib_1 = require("tslib");
var RulesExpression_1 = require("../core/RulesExpression");
var RulesInteger_1 = require("./RulesInteger");
var RulesValue_1 = require("./RulesValue");
/**
 * List type. Items are not necessarily homogenous.
 */
var RulesList = /** @class */ (function (_super) {
    tslib_1.__extends(RulesList, _super);
    function RulesList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Get the number of values in the list.
     *
     * {@link https://firebase.google.com/docs/reference/rules/rules.List#size}
     */
    RulesList.prototype.size = function () {
        return new RulesInteger_1.RulesInteger(new RulesExpression_1.RulesExpression(this, RulesExpression_1.RulesExpression.l(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject([".length"], [".length"])))));
    };
    return RulesList;
}(RulesValue_1.RulesValue));
exports.RulesList = RulesList;
var templateObject_1;
//# sourceMappingURL=RulesList.js.map