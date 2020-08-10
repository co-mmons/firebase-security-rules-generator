"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.path = exports.RulesPath = void 0;
var tslib_1 = require("tslib");
var RulesExpression_1 = require("../core/RulesExpression");
var RulesValue_1 = require("./RulesValue");
/**
 * Directory-like pattern for the location of a resource.
 *
 * {@link https://firebase.google.com/docs/reference/rules/rules.Path}
 */
var RulesPath = /** @class */ (function (_super) {
    tslib_1.__extends(RulesPath, _super);
    function RulesPath() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RulesPath.prototype.bind = function (map) {
        return new RulesPath(new RulesExpression_1.RulesExpression(RulesExpression_1.RulesExpression.l(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["("], ["("]))), this, RulesExpression_1.RulesExpression.l(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject([").bind("], [").bind("]))), map, RulesExpression_1.RulesExpression.l(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject([")"], [")"])))));
    };
    return RulesPath;
}(RulesValue_1.RulesValue));
exports.RulesPath = RulesPath;
function path(path) {
    return new RulesPath(new RulesExpression_1.RulesExpression(RulesExpression_1.RulesExpression.l(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["path("], ["path("]))), path, RulesExpression_1.RulesExpression.l(templateObject_5 || (templateObject_5 = tslib_1.__makeTemplateObject([")"], [")"])))));
}
exports.path = path;
(function (RulesPath) {
    function value(stringPath) {
        return path(stringPath);
    }
    RulesPath.value = value;
})(RulesPath = exports.RulesPath || (exports.RulesPath = {}));
exports.RulesPath = RulesPath;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=RulesPath.js.map