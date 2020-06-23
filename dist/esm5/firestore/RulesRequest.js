import { __extends, __makeTemplateObject } from "tslib";
import { RulesExpression } from "../core/RulesExpression";
import { RulesValue } from "../core/RulesValue";
import { RulesRequestAuth } from "./RulesRequestAuth";
import { RulesResource } from "./RulesResource";
import { RulesString } from "./RulesString";
import { RulesTimestamp } from "./RulesTimestamp";
export function request(resourceData) {
    // @ts-ignore
    return new RulesRequestImpl(resourceData.__rulesClone());
}
var RulesRequestImpl = /** @class */ (function (_super) {
    __extends(RulesRequestImpl, _super);
    function RulesRequestImpl(data) {
        var _this = _super.call(this) || this;
        // @ts-ignore
        _this.auth = new RulesRequestAuth;
        _this.time = new RulesTimestamp;
        /**
         * The request method. One of:
         * - get
         * - list
         * - create
         * - update
         * - delete
         *
         * @see https://firebase.google.com/docs/reference/rules/rules.firestore.Request#method
         */
        _this.method = new RulesString;
        _this.resource = new RulesResource(data);
        _this.__rulesInitProperties();
        _this.__rulesExpression = RulesExpression.l(templateObject_1 || (templateObject_1 = __makeTemplateObject(["request"], ["request"])));
        return _this;
    }
    return RulesRequestImpl;
}(RulesValue));
var templateObject_1;
//# sourceMappingURL=RulesRequest.js.map