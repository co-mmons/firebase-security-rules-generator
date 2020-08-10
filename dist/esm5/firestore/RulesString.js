import { __extends, __spreadArrays } from "tslib";
import { concatExpression, substringExpression } from "../core/RulesString";
import { RulesValue } from "./RulesValue";
var RulesString = /** @class */ (function (_super) {
    __extends(RulesString, _super);
    function RulesString() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RulesString.prototype.concat = function () {
        var strings = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            strings[_i] = arguments[_i];
        }
        return new RulesString(concatExpression.apply(void 0, __spreadArrays([this], strings)));
    };
    RulesString.prototype.substring = function (start, end) {
        return new RulesString(substringExpression(this, start, end));
    };
    return RulesString;
}(RulesValue));
export { RulesString };
//# sourceMappingURL=RulesString.js.map