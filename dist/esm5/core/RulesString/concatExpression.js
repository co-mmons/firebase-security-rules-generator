import { __makeTemplateObject, __spreadArrays } from "tslib";
import { RulesExpression } from "../RulesExpression";
export function concatExpression() {
    var strings = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        strings[_i] = arguments[_i];
    }
    var expressions = [];
    for (var i = 0; i < strings.length; i++) {
        if (i > 0) {
            expressions.push(RulesExpression.l(templateObject_1 || (templateObject_1 = __makeTemplateObject([" + "], [" + "]))));
        }
        expressions.push(strings[i]);
    }
    return new (RulesExpression.bind.apply(RulesExpression, __spreadArrays([void 0, RulesExpression.l(templateObject_2 || (templateObject_2 = __makeTemplateObject(["("], ["("])))], expressions, [RulesExpression.l(templateObject_3 || (templateObject_3 = __makeTemplateObject([")"], [")"])))])))();
}
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=concatExpression.js.map