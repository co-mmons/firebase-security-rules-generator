"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = void 0;
/**
 * Get the contents of a firestore document.
 *
 * {@link https://firebase.google.com/docs/reference/rules/rules.firestore#.get}
 */
const RulesExpression_1 = require("../core/RulesExpression");
const RulesPath_1 = require("./RulesPath");
const RulesResource_1 = require("./RulesResource");
function get(path) {
    const resource = new RulesResource_1.RulesResource();
    resource.__rulesExpression = new RulesExpression_1.RulesExpression(RulesExpression_1.RulesExpression.l `get(`, typeof path === "string" ? RulesPath_1.RulesPath.value(path) : path, RulesExpression_1.RulesExpression.l `)`);
    return resource;
}
exports.get = get;
//# sourceMappingURL=get.js.map