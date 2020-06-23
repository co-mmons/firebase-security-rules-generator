"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.or = void 0;
var orExpression_1 = require("../core/orExpression");
var RulesBoolean_1 = require("./RulesBoolean");
function or() {
    var parts = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        parts[_i] = arguments[_i];
    }
    return new RulesBoolean_1.RulesBoolean(orExpression_1.orExpression.apply(void 0, parts));
}
exports.or = or;
//# sourceMappingURL=or.js.map