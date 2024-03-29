"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RulesNumber = void 0;
const RulesExpression_1 = require("../core/RulesExpression");
const RulesNumber_1 = require("../core/RulesNumber");
const RulesBoolean_1 = require("./RulesBoolean");
const RulesValue_1 = require("./RulesValue");
class RulesNumber extends RulesValue_1.RulesValue {
    gt(other) {
        return new RulesBoolean_1.RulesBoolean((0, RulesNumber_1.gtExpression)(this, other));
    }
    gte(other) {
        return new RulesBoolean_1.RulesBoolean((0, RulesNumber_1.gteExpression)(this, other));
    }
    lt(other) {
        return new RulesBoolean_1.RulesBoolean((0, RulesNumber_1.ltExpression)(this, other));
    }
    lte(other) {
        return new RulesBoolean_1.RulesBoolean((0, RulesNumber_1.lteExpression)(this, other));
    }
    minus(other) {
        return new RulesNumber((0, RulesNumber_1.minusExpression)(this, other));
    }
    plus(other) {
        return new RulesNumber((0, RulesNumber_1.plusExpression)(this, other));
    }
    abs() {
        return new RulesNumber(new RulesExpression_1.RulesExpression(RulesExpression_1.RulesExpression.l `math.abs(`, this, RulesExpression_1.RulesExpression.l `)`));
    }
}
exports.RulesNumber = RulesNumber;
//# sourceMappingURL=RulesNumber.js.map