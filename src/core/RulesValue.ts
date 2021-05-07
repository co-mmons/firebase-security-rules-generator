import {InternalRulesValue} from "../internal";
import {RulesExpression} from "./RulesExpression";

export class RulesValue {

    constructor(expression?: RulesExpression) {
        (this as any as InternalRulesValue).__rulesValue = true;

        if (expression) {
            this.__rulesExpression = expression;
        }
    }

    private __rulesExpression?: RulesExpression;
    private __rulesVarId?: string;
    private __rulesAccessorName?: string;
    private __rulesAccessorContext?: string | RulesValue;

    private __rulesValueAsExpression() {

        if (this.__rulesVarId) {
            return new RulesExpression(RulesExpression.l`${this.__rulesVarId}`);

        } else if (this.__rulesExpression) {
            return this.__rulesExpression;

        } else if (typeof this.__rulesAccessorContext === "string") {
            return RulesExpression.l`${this.__rulesAccessorContext}${accessorExpression(this.__rulesAccessorName)}`;
        } else if (this.__rulesAccessorContext) {
            return new RulesExpression(this.__rulesAccessorContext, RulesExpression.l`${accessorExpression(this.__rulesAccessorName)}`);
        } else {
            return new RulesExpression(RulesExpression.l`${this.__rulesAccessorName}`);
        }
    }

    private __rulesInitProperties() {

        for (const propertyName in this) {

            const propertyValue = this[propertyName];

            if (propertyValue instanceof RulesValue && !propertyName.startsWith("__rules")) {
                propertyValue.__rulesAccessorName = propertyName;
                propertyValue.__rulesAccessorContext = this;
                propertyValue.__rulesInitProperties();
            }
        }

    }

    private __rulesClone() {
        const niu = new (this["constructor"] as any as {new(): RulesValue});
        niu.__rulesInitProperties();
        return niu;
    }
}

function accessorExpression(name: string) {
    if (name.match(/^(?![0-9])[a-zA-Z0-9$_]+$/)) {
        return `.${name}`;
    } else {
        return `["${name}"]`
    }
}