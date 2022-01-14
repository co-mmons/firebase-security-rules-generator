"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.and = void 0;
const andExpression_1 = require("../core/andExpression");
const RulesBoolean_1 = require("./RulesBoolean");
function and(...parts) {
    return new RulesBoolean_1.RulesBoolean((0, andExpression_1.andExpression)(...parts));
}
exports.and = and;
//# sourceMappingURL=and.js.map