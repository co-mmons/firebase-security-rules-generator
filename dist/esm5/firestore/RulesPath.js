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
})(RulesPath || (RulesPath = {}));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=RulesPath.js.map