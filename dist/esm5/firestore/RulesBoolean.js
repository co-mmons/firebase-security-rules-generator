import { __extends, __makeTemplateObject } from "tslib";
import { RulesExpression } from "../core/RulesExpression";
import { not } from "./not";
import { RulesValue } from "./RulesValue";
/**
 *  Type representing a boolean value, true or false.
 *
 *  @link https://firebase.google.com/docs/reference/rules/rules.Boolean
 */
var RulesBoolean = /** @class */ (function (_super) {
    __extends(RulesBoolean, _super);
    function RulesBoolean() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Negative value of this boolean.
     */
    RulesBoolean.prototype.not = function () {
        return not(this);
    };
    return RulesBoolean;
}(RulesValue));
export { RulesBoolean };
(function (RulesBoolean) {
    /**
     * Convert string into boolean.
     */
    function value(value) {
        return new RulesBoolean(new RulesExpression(RulesExpression.l(templateObject_1 || (templateObject_1 = __makeTemplateObject(["bool("], ["bool("]))), value, RulesExpression.l(templateObject_2 || (templateObject_2 = __makeTemplateObject([")"], [")"])))));
    }
    RulesBoolean.value = value;
})(RulesBoolean || (RulesBoolean = {}));
var templateObject_1, templateObject_2;
//# sourceMappingURL=RulesBoolean.js.map