"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.existsAfter = void 0;
const RulesExpression_1 = require("../core/RulesExpression");
const RulesBoolean_1 = require("./RulesBoolean");
const RulesPath_1 = require("./RulesPath");
/**
 * @see https://firebase.google.com/docs/reference/rules/rules.firestore#.existsAfter
 */
function existsAfter(path) {
    return new RulesBoolean_1.RulesBoolean(new RulesExpression_1.RulesExpression(RulesExpression_1.RulesExpression.l `existsAfter(`, typeof path === "string" ? RulesPath_1.RulesPath.value(path) : path, RulesExpression_1.RulesExpression.l `)`));
}
exports.existsAfter = existsAfter;
//# sourceMappingURL=existsAfter.js.map