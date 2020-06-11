import { __makeTemplateObject, __spreadArrays } from "tslib";
import { RulesExpression } from "./RulesExpression";
export function and() {
    var parts = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        parts[_i] = arguments[_i];
    }
    var expression = [];
    if (parts.length > 1) {
        expression.push(RulesExpression.l(templateObject_1 || (templateObject_1 = __makeTemplateObject(["("], ["("]))));
        if (parts.length > 2) {
            expression.push(RulesExpression.identUp(), RulesExpression.newLine());
        }
    }
    for (var i = 0; i < parts.length; i++) {
        if (i > 0) {
            expression.push(RulesExpression.l(templateObject_2 || (templateObject_2 = __makeTemplateObject([" && "], [" && "]))));
            if (parts.length > 2) {
                expression.push(RulesExpression.newLine());
            }
        }
        expression.push(parts[i]);
    }
    if (parts.length > 1) {
        if (parts.length > 2) {
            expression.push(RulesExpression.identDown(), RulesExpression.newLine());
        }
        expression.push(RulesExpression.l(templateObject_3 || (templateObject_3 = __makeTemplateObject([")"], [")"]))));
    }
    return new (RulesExpression.bind.apply(RulesExpression, __spreadArrays([void 0], expression)))();
}
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=and.js.map