"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RulesValue = void 0;
var tslib_1 = require("tslib");
var RulesExpression_1 = require("./RulesExpression");
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
            return RulesExpression_1.RulesExpression.l(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["", ".", ""], ["", ".", ""])), this.__rulesAccessorContext, this.__rulesAccessorName);
        }
        else if (this.__rulesAccessorContext) {
            return new RulesExpression_1.RulesExpression(this.__rulesAccessorContext, RulesExpression_1.RulesExpression.l(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject([".", ""], [".", ""])), this.__rulesAccessorName));
        }
        else {
            return new RulesExpression_1.RulesExpression(RulesExpression_1.RulesExpression.l(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["", ""], ["", ""])), this.__rulesAccessorName));
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
exports.RulesValue = RulesValue;
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=RulesValue.js.map