import { __extends } from "tslib";
import { RulesValue } from "../core/RulesValue";
import { RulesString } from "./RulesString";
var RulesRequestAuth = /** @class */ (function (_super) {
    __extends(RulesRequestAuth, _super);
    function RulesRequestAuth() {
        var _this = _super.call(this) || this;
        _this.uid = new RulesString;
        _this.toString = function () { return "request.auth"; };
        return _this;
    }
    return RulesRequestAuth;
}(RulesValue));
export { RulesRequestAuth };
//# sourceMappingURL=RulesRequestAuth.js.map