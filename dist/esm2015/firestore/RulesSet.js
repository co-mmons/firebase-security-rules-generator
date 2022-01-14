import { RulesExpression } from "../core/RulesExpression";
import { RulesBoolean } from "./RulesBoolean";
import { RulesInteger } from "./RulesInteger";
import { RulesValue } from "./RulesValue";
/**
 * List type. Items are not necessarily homogenous.
 *
 * {@link https://firebase.google.com/docs/reference/rules/rules.Set}
 */
export class RulesSet extends RulesValue {
    constructor(expression, valueType) {
        super(expression);
        this.valueType = valueType;
    }
    get(index, valueType) {
        const type = new (valueType || this.valueType || RulesValue);
        type.__rulesExpression = new RulesExpression(RulesExpression.l `(`, this, RulesExpression.l `)`, RulesExpression.l `[`, index, RulesExpression.l `]`);
        return type;
    }
    size() {
        return new RulesInteger(new RulesExpression(this, RulesExpression.l `.size()`));
    }
    hasAll(collection) {
        return this.buildHasExpression("hasAll", collection);
    }
    hasAny(list) {
        return this.buildHasExpression("hasAny", list);
    }
    hasOnly(list) {
        return this.buildHasExpression("hasOnly", list);
    }
    buildHasExpression(method, list) {
        const expression = [this, RulesExpression.l `.${method}(`];
        if (list instanceof Array) {
            expression.push(RulesExpression.l `[`);
            for (let i = 0; i < list.length; i++) {
                if (i > 0) {
                    expression.push(RulesExpression.l `, `);
                }
                expression.push(list[i]);
            }
            expression.push(RulesExpression.l `]`);
        }
        else {
            expression.push(list);
        }
        expression.push(RulesExpression.l `)`);
        return new RulesBoolean(new RulesExpression(expression));
    }
}
//# sourceMappingURL=RulesSet.js.map