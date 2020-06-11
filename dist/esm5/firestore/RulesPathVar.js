import { __extends, __makeTemplateObject } from "tslib";
import { RulesExpression } from "../core/RulesExpression";
import { RulesString } from "./RulesString";
var RulesPathVar = /** @class */ (function (_super) {
    __extends(RulesPathVar, _super);
    function RulesPathVar(varName) {
        var _this = _super.call(this) || this;
        _this.__rulesPathVar = true;
        if (varName) {
            _this.__rulesAccessorName = varName;
        }
        _this.__rulesValueAsExpression = function () { return RulesExpression.l(templateObject_1 || (templateObject_1 = __makeTemplateObject(["", ""], ["", ""])), _this.__rulesAccessorName); };
        return _this;
    }
    return RulesPathVar;
}(RulesString));
export { RulesPathVar };
var templateObject_1;
//# sourceMappingURL=RulesPathVar.js.map