import { __makeTemplateObject } from "tslib";
import { RulesExpression } from "../RulesExpression";
export function substringExpression(baseString, start, end) {
    return new RulesExpression(baseString, RulesExpression.l(templateObject_1 || (templateObject_1 = __makeTemplateObject(["["], ["["]))), start, RulesExpression.l(templateObject_2 || (templateObject_2 = __makeTemplateObject([":"], [":"]))), end, RulesExpression.l(templateObject_3 || (templateObject_3 = __makeTemplateObject(["]"], ["]"]))));
}
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=substringExpression.js.map