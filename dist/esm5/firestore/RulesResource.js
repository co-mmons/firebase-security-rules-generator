import { __extends } from "tslib";
import { RulesValue } from "../core/RulesValue";
import { RulesMap } from "./RulesMap";
import { RulesPath } from "./RulesPath";
import { RulesString } from "./RulesString";
var RulesResource = /** @class */ (function (_super) {
    __extends(RulesResource, _super);
    function RulesResource(data) {
        if (data === void 0) { data = new RulesMap; }
        var _this = _super.call(this) || this;
        _this.data = data;
        _this.id = new RulesString;
        _this.__name__ = new RulesPath;
        return _this;
    }
    return RulesResource;
}(RulesValue));
export { RulesResource };
//# sourceMappingURL=RulesResource.js.map