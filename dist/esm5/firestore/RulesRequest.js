import { __extends, __makeTemplateObject } from "tslib";
import { RulesExpression } from "../core/RulesExpression";
import { RulesValue } from "../core/RulesValue";
import { RulesRequestAuth } from "./RulesRequestAuth";
import { RulesResource } from "./RulesResource";
export function request(resourceData) {
    // @ts-ignore
    return new RulesRequestImpl(resourceData.__rulesClone());
}
var RulesRequestImpl = /** @class */ (function (_super) {
    __extends(RulesRequestImpl, _super);
    function RulesRequestImpl(data) {
        var _this = _super.call(this) || this;
        _this.resource = new RulesResource(data);
        // @ts-ignore
        _this.auth = new RulesRequestAuth();
        _this.__rulesInitProperties();
        _this.__rulesExpression = RulesExpression.l(templateObject_1 || (templateObject_1 = __makeTemplateObject(["request"], ["request"])));
        return _this;
    }
    return RulesRequestImpl;
}(RulesValue));
var templateObject_1;
//# sourceMappingURL=RulesRequest.js.map