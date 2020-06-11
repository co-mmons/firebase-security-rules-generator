"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RulesRequestAuth = void 0;
var tslib_1 = require("tslib");
var RulesValue_1 = require("../core/RulesValue");
var RulesString_1 = require("./RulesString");
var RulesRequestAuth = /** @class */ (function (_super) {
    tslib_1.__extends(RulesRequestAuth, _super);
    function RulesRequestAuth() {
        var _this = _super.call(this) || this;
        _this.uid = new RulesString_1.RulesString;
        _this.toString = function () { return "request.auth"; };
        return _this;
    }
    return RulesRequestAuth;
}(RulesValue_1.RulesValue));
exports.RulesRequestAuth = RulesRequestAuth;
//# sourceMappingURL=RulesRequestAuth.js.map