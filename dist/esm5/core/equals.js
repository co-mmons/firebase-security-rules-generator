import { __makeTemplateObject } from "tslib";
import { RulesExpression } from "./RulesExpression";
export function equals(left, right, not) {
    return new RulesExpression(left, RulesExpression.l(templateObject_1 || (templateObject_1 = __makeTemplateObject([" ", "= "], [" ", "= "])), not ? '!' : '='), right);
}
var templateObject_1;
//# sourceMappingURL=equals.js.map