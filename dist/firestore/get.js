"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = void 0;
var tslib_1 = require("tslib");
var RulesExpression_1 = require("../core/RulesExpression");
var RulesPath_1 = require("./RulesPath");
var RulesResource_1 = require("./RulesResource");
/**
 * Get the contents of a firestore document.
 *
 * @see https://firebase.google.com/docs/reference/rules/rules.firestore#.get
 */
function get(path) {
    var resource = new RulesResource_1.RulesResource();
    resource.__rulesExpression = new RulesExpression_1.RulesExpression(RulesExpression_1.RulesExpression.l(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["get("], ["get("]))), typeof path === "string" ? RulesPath_1.RulesPath.value(path) : path, RulesExpression_1.RulesExpression.l(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject([")"], [")"]))));
    return resource;
}
exports.get = get;
var templateObject_1, templateObject_2;
//# sourceMappingURL=get.js.map