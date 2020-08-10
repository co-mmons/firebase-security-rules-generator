import { __extends, __makeTemplateObject } from "tslib";
import { RulesExpression } from "../core/RulesExpression";
import { RulesValue } from "./RulesValue";
/**
 * Directory-like pattern for the location of a resource.
 *
 * {@link https://firebase.google.com/docs/reference/rules/rules.Path}
 */
var RulesPath = /** @class */ (function (_super) {
    __extends(RulesPath, _super);
    function RulesPath() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RulesPath.prototype.bind = function (map) {
        return new RulesPath(new RulesExpression(RulesExpression.l(templateObject_1 || (templateObject_1 = __makeTemplateObject(["("], ["("]))), this, RulesExpression.l(templateObject_2 || (templateObject_2 = __makeTemplateObject([").bind("], [").bind("]))), map, RulesExpression.l(templateObject_3 || (templateObject_3 = __makeTemplateObject([")"], [")"])))));
    };
    return RulesPath;
}(RulesValue));
export { RulesPath };
export function path(path) {
    return new RulesPath(new RulesExpression(RulesExpression.l(templateObject_4 || (templateObject_4 = __makeTemplateObject(["path("], ["path("]))), path, RulesExpression.l(templateObject_5 || (templateObject_5 = __makeTemplateObject([")"], [")"])))));
}
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
            __extends(class_1, _super);
            function class_1() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            class_1.prototype.write = function (writer) {
                writer.write("path(\"/databases/$(database)/documents");
                for (var i = 0; i < strings.length; i++) {
                    writer.write(strings[i]);
                    if (expr.length > i) {
                        if (expr[i] instanceof RulesValue || expr[i] instanceof RulesExpression) {
                            writer.write("\" + ");
                            (expr[i] instanceof RulesValue ? expr[i].__rulesValueAsExpression() : expr[i]).write(writer);
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
        }(RulesExpression)));
    }
    RulesPath.l = l;
})(RulesPath || (RulesPath = {}));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=RulesPath.js.map