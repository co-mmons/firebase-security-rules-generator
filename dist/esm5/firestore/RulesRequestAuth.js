import { __extends, __makeTemplateObject } from "tslib";
import { RulesExpression } from "../core/RulesExpression";
import { RulesValue } from "../core/RulesValue";
import { RulesString } from "./RulesString";
export function auth() {
    // @ts-ignore
    var auth = new RulesRequestAuth();
    auth.__rulesInitProperties();
    return auth;
}
var RulesRequestAuth = /** @class */ (function (_super) {
    __extends(RulesRequestAuth, _super);
    function RulesRequestAuth() {
        var _this = _super.call(this) || this;
        _this.uid = new RulesString;
        _this.__rulesExpression = RulesExpression.l(templateObject_1 || (templateObject_1 = __makeTemplateObject(["request.auth"], ["request.auth"])));
        return _this;
    }
    return RulesRequestAuth;
}(RulesValue));
export { RulesRequestAuth };
var templateObject_1;
//# sourceMappingURL=RulesRequestAuth.js.map