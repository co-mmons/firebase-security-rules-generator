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
    function l(strings) {
        var expr = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            expr[_i - 1] = arguments[_i];
        }
        return new RulesPath(new /** @class */ (function (_super) {
            tslib_1.__extends(class_1, _super);
            function class_1() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            class_1.prototype.write = function (writer) {
                writer.write("path(\"/databases/$(database)/documents");
                for (var i = 0; i < strings.length; i++) {
                    writer.write(strings[i]);
                    if (expr.length > i) {
                        if (expr[i] instanceof RulesValue_1.RulesValue || expr[i] instanceof RulesExpression_1.RulesExpression) {
                            writer.write("\" + ");
                            (expr[i] instanceof RulesValue_1.RulesValue ? expr[i].__rulesValueAsExpression() : expr[i]).write(writer);
                            writer.write(" + \"");
                        }
                        else {
                            writer.write(expr[i] || "");
                        }
                    }
                }
                writer.write("\")");
            };
            return class_1;
        }(RulesExpression_1.RulesExpression)));
    }
    RulesPath.l = l;
})(RulesPath = exports.RulesPath || (exports.RulesPath = {}));
exports.RulesPath = RulesPath;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=RulesPath.js.map