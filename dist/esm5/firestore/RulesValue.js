import { __extends, __makeTemplateObject } from "tslib";
import { RulesExpression } from "../core/RulesExpression";
import { RulesValue as $RulesValue } from "../core/RulesValue";
import { equals } from "./equals";
import { RulesBoolean } from "./RulesBoolean";
var RulesValue = /** @class */ (function (_super) {
    __extends(RulesValue, _super);
    function RulesValue() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RulesValue.prototype.isNotNull = function () {
        return new RulesBoolean(new RulesExpression(this, RulesExpression.l(templateObject_1 || (templateObject_1 = __makeTemplateObject([" != null"], [" != null"])))));
    };
    RulesValue.prototype.isNull = function () {
        return new RulesBoolean(new RulesExpression(this, RulesExpression.l(templateObject_2 || (templateObject_2 = __makeTemplateObject([" == null"], [" == null"])))));
    };
    RulesValue.prototype.equals = function (other, not) {
        return equals(this, other, not);
    };
    return RulesValue;
}($RulesValue));
export { RulesValue };
var templateObject_1, templateObject_2;
//# sourceMappingURL=RulesValue.js.map