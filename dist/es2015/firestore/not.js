"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.not = void 0;
const notExpression_1 = require("../core/notExpression");
const RulesBoolean_1 = require("./RulesBoolean");
function not(value) {
    return new RulesBoolean_1.RulesBoolean((0, notExpression_1.notExpression)(value));
}
exports.not = not;
//# sourceMappingURL=not.js.map