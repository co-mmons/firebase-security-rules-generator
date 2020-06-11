import { __extends } from "tslib";
import { RulesValue } from "../core/RulesValue";
import { RulesRequestAuth } from "./RulesRequestAuth";
import { RulesResource } from "./RulesResource";
export function request(resourceData) {
    // @ts-ignore
    return new RulesRequest(resourceData.__rulesClone());
}
var RulesRequest = /** @class */ (function (_super) {
    __extends(RulesRequest, _super);
    function RulesRequest(data) {
        var _this = _super.call(this) || this;
        // @ts-ignore
        _this.resource = new RulesResource(data);
        // @ts-ignore
        _this.auth = new RulesRequestAuth();
        _this.__rulesInitProperties();
        _this.toString = function () { return "request"; };
        return _this;
    }
    return RulesRequest;
}(RulesValue));
export { RulesRequest };
//# sourceMappingURL=RulesRequest.js.map