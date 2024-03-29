"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.equals = void 0;
const RulesBoolean_1 = require("./RulesBoolean");
const equals_1 = require("../core/equals");
function equals(left, right, not) {
    return new RulesBoolean_1.RulesBoolean((0, equals_1.equals)(left, right, not));
}
exports.equals = equals;
//# sourceMappingURL=equals.js.map