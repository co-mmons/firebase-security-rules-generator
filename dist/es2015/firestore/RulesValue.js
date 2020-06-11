"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RulesValue = void 0;
const RulesValue_1 = require("../core/RulesValue");
const equals_1 = require("./equals");
class RulesValue extends RulesValue_1.RulesValue {
    equals(other) {
        return equals_1.equals(this, other);
    }
}
exports.RulesValue = RulesValue;
//# sourceMappingURL=RulesValue.js.map