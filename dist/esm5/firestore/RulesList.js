import { __extends, __makeTemplateObject } from "tslib";
import { RulesExpression } from "../core/RulesExpression";
import { RulesInteger } from "./RulesInteger";
import { RulesValue } from "./RulesValue";
/**
 * List type. Items are not necessarily homogenous.
 */
var RulesList = /** @class */ (function (_super) {
    __extends(RulesList, _super);
    function RulesList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Get the number of values in the list.
     *
     * {@link https://firebase.google.com/docs/reference/rules/rules.List#size}
     */
    RulesList.prototype.size = function () {
        return new RulesInteger(new RulesExpression(this, RulesExpression.l(templateObject_1 || (templateObject_1 = __makeTemplateObject([".length"], [".length"])))));
    };
    return RulesList;
}(RulesValue));
export { RulesList };
var templateObject_1;
//# sourceMappingURL=RulesList.js.map