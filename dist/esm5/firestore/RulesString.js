import { __extends } from "tslib";
import { concatExpression, substringExpression } from "../core/RulesString";
import { RulesValue } from "./RulesValue";
var RulesString = /** @class */ (function (_super) {
    __extends(RulesString, _super);
    function RulesString() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RulesString.prototype.concat = function (otherString) {
        return new RulesString(concatExpression(this, otherString));
    };
    RulesString.prototype.substring = function (start, end) {
        return new RulesString(substringExpression(this, start, end));
    };
    return RulesString;
}(RulesValue));
export { RulesString };
//# sourceMappingURL=RulesString.js.map