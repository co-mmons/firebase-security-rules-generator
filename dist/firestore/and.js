"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.and = void 0;
var andExpression_1 = require("../core/andExpression");
var RulesBoolean_1 = require("./RulesBoolean");
function and() {
    var parts = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        parts[_i] = arguments[_i];
    }
    return new RulesBoolean_1.RulesBoolean(andExpression_1.andExpression.apply(void 0, parts));
}
exports.and = and;
//# sourceMappingURL=and.js.map