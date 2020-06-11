"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RulesRequest = exports.request = void 0;
var tslib_1 = require("tslib");
var RulesValue_1 = require("../core/RulesValue");
var RulesRequestAuth_1 = require("./RulesRequestAuth");
var RulesResource_1 = require("./RulesResource");
function request(resourceData) {
    // @ts-ignore
    return new RulesRequest(resourceData.__rulesClone());
}
exports.request = request;
var RulesRequest = /** @class */ (function (_super) {
    tslib_1.__extends(RulesRequest, _super);
    function RulesRequest(data) {
        var _this = _super.call(this) || this;
        // @ts-ignore
        _this.resource = new RulesResource_1.RulesResource(data);
        // @ts-ignore
        _this.auth = new RulesRequestAuth_1.RulesRequestAuth();
        _this.__rulesInitProperties();
        _this.toString = function () { return "request"; };
        return _this;
    }
    return RulesRequest;
}(RulesValue_1.RulesValue));
exports.RulesRequest = RulesRequest;
//# sourceMappingURL=RulesRequest.js.map