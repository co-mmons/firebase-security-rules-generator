"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RulesValue = void 0;
var tslib_1 = require("tslib");
var RulesValue_1 = require("../core/RulesValue");
var equals_1 = require("./equals");
var RulesValue = /** @class */ (function (_super) {
    tslib_1.__extends(RulesValue, _super);
    function RulesValue() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RulesValue.prototype.equals = function (other) {
        return equals_1.equals(this, other);
    };
    return RulesValue;
}(RulesValue_1.RulesValue));
exports.RulesValue = RulesValue;
//# sourceMappingURL=RulesValue.js.map