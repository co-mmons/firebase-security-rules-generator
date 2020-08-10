"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RulesRequestAuth = exports.auth = void 0;
var tslib_1 = require("tslib");
var RulesExpression_1 = require("../core/RulesExpression");
var RulesValue_1 = require("./RulesValue");
var RulesString_1 = require("./RulesString");
function auth() {
    // @ts-ignore
    var auth = new RulesRequestAuth();
    auth.__rulesInitProperties();
    return auth;
}
exports.auth = auth;
var RulesRequestAuth = /** @class */ (function (_super) {
    tslib_1.__extends(RulesRequestAuth, _super);
    function RulesRequestAuth() {
        var _this = _super.call(this) || this;
        _this.uid = new RulesString_1.RulesString;
        _this.__rulesExpression = RulesExpression_1.RulesExpression.l(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["request.auth"], ["request.auth"])));
        return _this;
    }
    return RulesRequestAuth;
}(RulesValue_1.RulesValue));
exports.RulesRequestAuth = RulesRequestAuth;
var templateObject_1;
//# sourceMappingURL=RulesRequestAuth.js.map