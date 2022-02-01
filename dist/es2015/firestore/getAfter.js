"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAfter = void 0;
const RulesExpression_1 = require("../core/RulesExpression");
const RulesPath_1 = require("./RulesPath");
const RulesResource_1 = require("./RulesResource");
/**
 * Get the contents of a firestore document.
 *
 * @see https://firebase.google.com/docs/reference/rules/rules.firestore#.getAfter
 */
function getAfter(path) {
    const resource = new RulesResource_1.RulesResourceUnknownData();
    resource.__rulesExpression = new RulesExpression_1.RulesExpression(RulesExpression_1.RulesExpression.l `getAfter(`, typeof path === "string" ? RulesPath_1.RulesPath.value(path) : path, RulesExpression_1.RulesExpression.l `)`);
    return resource;
}
exports.getAfter = getAfter;
//# sourceMappingURL=getAfter.js.map