"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getData = void 0;
var tslib_1 = require("tslib");
/**
 * Get the contents of a firestore document.
 *
 * {@link https://firebase.google.com/docs/reference/rules/rules.firestore#.get}
 */
var RulesExpression_1 = require("../core/RulesExpression");
var get_1 = require("./get");
function getData(path, dataType) {
    var data = new dataType();
    data.__rulesExpression = new RulesExpression_1.RulesExpression(RulesExpression_1.RulesExpression.l(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["__getResourceData("], ["__getResourceData("]))), get_1.get(path), RulesExpression_1.RulesExpression.l(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject([")"], [")"]))));
    return data;
}
exports.getData = getData;
var templateObject_1, templateObject_2;
//# sourceMappingURL=getData.js.map