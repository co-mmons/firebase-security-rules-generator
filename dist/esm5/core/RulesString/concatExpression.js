import { __makeTemplateObject } from "tslib";
import { RulesExpression } from "../RulesExpression";
export function concatExpression(baseString, otherString) {
    return new RulesExpression(RulesExpression.l(templateObject_1 || (templateObject_1 = __makeTemplateObject(["("], ["("]))), baseString, RulesExpression.l(templateObject_2 || (templateObject_2 = __makeTemplateObject([" + "], [" + "]))), otherString, RulesExpression.l(templateObject_3 || (templateObject_3 = __makeTemplateObject([")"], [")"]))));
}
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=concatExpression.js.map