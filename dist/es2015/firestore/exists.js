"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exists = void 0;
const RulesExpression_1 = require("../core/RulesExpression");
const RulesBoolean_1 = require("./RulesBoolean");
const RulesPath_1 = require("./RulesPath");
/**
 * Check if a document exists.
 *
 * @param path The path. Value must not be null.
 * @see https://firebase.google.com/docs/reference/rules/rules.firestore#.exists
 */
function exists(path) {
    return new RulesBoolean_1.RulesBoolean(new RulesExpression_1.RulesExpression(RulesExpression_1.RulesExpression.l `exists(`, typeof path === "string" ? RulesPath_1.RulesPath.value(path) : path, RulesExpression_1.RulesExpression.l `)`));
}
exports.exists = exists;
//# sourceMappingURL=exists.js.map