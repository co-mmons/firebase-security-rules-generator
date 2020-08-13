"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RulesString = void 0;
const RulesString_1 = require("../core/RulesString");
const trimExpression_1 = require("../core/RulesString/trimExpression");
const RulesValue_1 = require("./RulesValue");
class RulesString extends RulesValue_1.RulesValue {
    trim() {
        return new RulesString(trimExpression_1.trimExpression(this));
    }
    concat(...strings) {
        return new RulesString(RulesString_1.concatExpression(this, ...strings));
    }
    substring(start, end) {
        return new RulesString(RulesString_1.substringExpression(this, start, end));
    }
}
exports.RulesString = RulesString;
//# sourceMappingURL=RulesString.js.map