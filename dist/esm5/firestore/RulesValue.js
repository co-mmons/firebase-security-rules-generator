import { __extends } from "tslib";
import { RulesValue as $RulesValue } from "../core/RulesValue";
import { equals } from "./equals";
var RulesValue = /** @class */ (function (_super) {
    __extends(RulesValue, _super);
    function RulesValue() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RulesValue.prototype.equals = function (other) {
        return equals(this, other);
    };
    return RulesValue;
}($RulesValue));
export { RulesValue };
//# sourceMappingURL=RulesValue.js.map