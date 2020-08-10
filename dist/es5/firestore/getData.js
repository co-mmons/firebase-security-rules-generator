"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getData = void 0;
var tslib_1 = require("tslib");
var RulesExpression_1 = require("../core/RulesExpression");
var get_1 = require("./get");
/**
 * Get data of resource denoted by given path. Inside it's using {@link get} to access a resource.
 *
 * @param path Path to a resource.
 * @param dataType Type of data, that is contained within given resource. By default {@link RulesMap} is used.
 * @return Data or null if resource not exists.
 *
 * @see https://firebase.google.com/docs/reference/rules/rules.firestore#.get
 */
function getData(path, dataType) {
    var data = new dataType();
    data.__rulesExpression = new RulesExpression_1.RulesExpression(RulesExpression_1.RulesExpression.l(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["__getResourceData("], ["__getResourceData("]))), get_1.get(path), RulesExpression_1.RulesExpression.l(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject([")"], [")"]))));
    return data;
}
exports.getData = getData;
var templateObject_1, templateObject_2;
//# sourceMappingURL=getData.js.map