"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.not = void 0;
var notExpression_1 = require("../core/notExpression");
var RulesBoolean_1 = require("./RulesBoolean");
function not(value) {
    return new RulesBoolean_1.RulesBoolean(notExpression_1.notExpression(value));
}
exports.not = not;
//# sourceMappingURL=not.js.map