"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RulesInteger = void 0;
const RulesNumber_1 = require("../core/RulesNumber");
const RulesBoolean_1 = require("./RulesBoolean");
const RulesValue_1 = require("./RulesValue");
class RulesInteger extends RulesValue_1.RulesValue {
    gt(other) {
        return new RulesBoolean_1.RulesBoolean((0, RulesNumber_1.gtExpression)(this, other));
    }
    gte(other) {
        return new RulesBoolean_1.RulesBoolean((0, RulesNumber_1.gteExpression)(this, other));
    }
}
exports.RulesInteger = RulesInteger;
//# sourceMappingURL=RulesInteger.js.map