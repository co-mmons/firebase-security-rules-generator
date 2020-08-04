import { __extends, __makeTemplateObject } from "tslib";
import { RulesExpression } from "../core/RulesExpression";
import { RulesValue } from "../core/RulesValue";
import { RulesMap } from "./RulesMap";
import { RulesPath } from "./RulesPath";
import { RulesString } from "./RulesString";
var RulesResource = /** @class */ (function (_super) {
    __extends(RulesResource, _super);
    function RulesResource($data) {
        if ($data === void 0) { $data = new RulesMap; }
        var _this = _super.call(this) || this;
        _this.$data = $data;
        _this.id = new RulesString;
        _this.__name__ = new RulesPath;
        return _this;
    }
    RulesResource.prototype.data = function (dataType) {
        if (dataType) {
            return this.$data;
        }
        else {
            var data = new dataType();
            data.__rulesExpression = new RulesExpression(this, RulesExpression.l(templateObject_1 || (templateObject_1 = __makeTemplateObject([".data"], [".data"]))));
            return data;
        }
    };
    return RulesResource;
}(RulesValue));
export { RulesResource };
var templateObject_1;
//# sourceMappingURL=RulesResource.js.map