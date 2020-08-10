"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exists = void 0;
var tslib_1 = require("tslib");
var RulesExpression_1 = require("../core/RulesExpression");
var RulesBoolean_1 = require("./RulesBoolean");
var RulesPath_1 = require("./RulesPath");
/**
 * Check if a document exists.
 *
 * @param path The path. Value must not be null.
 * @see https://firebase.google.com/docs/reference/rules/rules.firestore#.exists
 */
function exists(path) {
    return new RulesBoolean_1.RulesBoolean(new RulesExpression_1.RulesExpression(RulesExpression_1.RulesExpression.l(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["exists("], ["exists("]))), typeof path === "string" ? RulesPath_1.RulesPath.value(path) : path, RulesExpression_1.RulesExpression.l(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject([")"], [")"])))));
}
exports.exists = exists;
var templateObject_1, templateObject_2;
//# sourceMappingURL=exists.js.map