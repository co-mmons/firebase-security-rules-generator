"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RulesValue = void 0;
const RulesExpression_1 = require("./RulesExpression");
class RulesValue {
    constructor(expression) {
        this.__rulesValue = true;
        if (expression) {
            this.__rulesExpression = expression;
        }
    }
    __rulesValueAsExpression() {
        if (this.__rulesExpression) {
            return this.__rulesExpression;
        }
        else if (typeof this.__rulesAccessorContext === "string") {
            return RulesExpression_1.RulesExpression.l `${this.__rulesAccessorContext}.${this.__rulesAccessorName}`;
        }
        else if (this.__rulesAccessorContext) {
            return new RulesExpression_1.RulesExpression(this.__rulesAccessorContext, RulesExpression_1.RulesExpression.l `.${this.__rulesAccessorName}`);
        }
        else {
            return new RulesExpression_1.RulesExpression(RulesExpression_1.RulesExpression.l `${this.__rulesAccessorName}`);
        }
    }
    __rulesInitProperties() {
        for (const propertyName in this) {
            const propertyValue = this[propertyName];
            if (propertyValue instanceof RulesValue && !propertyName.startsWith("__rules")) {
                propertyValue.__rulesAccessorName = propertyName;
                propertyValue.__rulesAccessorContext = this;
                propertyValue.__rulesInitProperties();
            }
        }
    }
    __rulesClone() {
        const niu = new this["constructor"];
        niu.__rulesInitProperties();
        return niu;
    }
}
exports.RulesValue = RulesValue;
//# sourceMappingURL=RulesValue.js.map