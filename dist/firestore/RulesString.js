"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RulesString = void 0;
var tslib_1 = require("tslib");
var RulesString_1 = require("../core/RulesString");
var RulesValue_1 = require("./RulesValue");
var RulesString = /** @class */ (function (_super) {
    tslib_1.__extends(RulesString, _super);
    function RulesString() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RulesString.prototype.concat = function (otherString) {
        return new RulesString(RulesString_1.concatExpression(this, otherString));
    };
    RulesString.prototype.substring = function (start, end) {
        return new RulesString(RulesString_1.substringExpression(this, start, end));
    };
    return RulesString;
}(RulesValue_1.RulesValue));
exports.RulesString = RulesString;
//# sourceMappingURL=RulesString.js.map