"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.or = void 0;
const orExpression_1 = require("../core/orExpression");
const RulesBoolean_1 = require("./RulesBoolean");
function or(...parts) {
    return new RulesBoolean_1.RulesBoolean(orExpression_1.orExpression(...parts));
}
exports.or = or;
//# sourceMappingURL=or.js.map