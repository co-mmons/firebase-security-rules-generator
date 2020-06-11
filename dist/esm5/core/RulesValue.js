import { __makeTemplateObject } from "tslib";
import { RulesExpression } from "./RulesExpression";
var RulesValue = /** @class */ (function () {
    function RulesValue(expression) {
        this.__rulesValue = true;
        if (expression) {
            this.__rulesExpression = expression;
        }
    }
    RulesValue.prototype.__rulesValueAsExpression = function () {
        if (this.__rulesExpression) {
            return this.__rulesExpression;
        }
        else if (typeof this.__rulesAccessorContext === "string") {
            return RulesExpression.l(templateObject_1 || (templateObject_1 = __makeTemplateObject(["", ".", ""], ["", ".", ""])), this.__rulesAccessorContext, this.__rulesAccessorName);
        }
        else if (this.__rulesAccessorContext) {
            return new RulesExpression(this.__rulesAccessorContext, RulesExpression.l(templateObject_2 || (templateObject_2 = __makeTemplateObject([".", ""], [".", ""])), this.__rulesAccessorName));
        }
        else {
            return new RulesExpression(RulesExpression.l(templateObject_3 || (templateObject_3 = __makeTemplateObject(["", ""], ["", ""])), this.__rulesAccessorName));
        }
    };
    RulesValue.prototype.__rulesInitProperties = function () {
        for (var propertyName in this) {
            var propertyValue = this[propertyName];
            if (propertyValue instanceof RulesValue && !propertyName.startsWith("__rules")) {
                propertyValue.__rulesAccessorName = propertyName;
                propertyValue.__rulesAccessorContext = this;
                propertyValue.__rulesInitProperties();
            }
        }
    };
    RulesValue.prototype.__rulesClone = function () {
        var niu = new this["constructor"];
        niu.__rulesInitProperties();
        return niu;
    };
    return RulesValue;
}());
export { RulesValue };
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=RulesValue.js.map