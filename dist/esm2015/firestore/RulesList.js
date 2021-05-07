import { RulesExpression } from "../core/RulesExpression";
import { RulesBoolean } from "./RulesBoolean";
import { RulesInteger } from "./RulesInteger";
import { RulesValue } from "./RulesValue";
/**
 * List type. Items are not necessarily homogenous.
 *
 * {@link https://firebase.google.com/docs/reference/rules/rules.List}
 */
export class RulesList extends RulesValue {
    constructor(arrayOrExpression) {
        if (Array.isArray(arrayOrExpression)) {
            super(new RulesExpression(RulesExpression.l `[`, arrayOrExpression, RulesExpression.l `]`));
        }
        else if (arrayOrExpression) {
            super(arrayOrExpression);
        }
        else {
            super();
        }
    }
    /**
     * Get the number of values in the list.
     */
    size() {
        return new RulesInteger(new RulesExpression(this, RulesExpression.l `.size()`));
    }
    /**
     * Determine whether the list contains all elements in another list.
     */
    hasAll(list) {
        return this.buildHasExpression("hasAny", list);
    }
    /**
     * Determine whether the list contains any element in another list.
     */
    hasAny(list) {
        return this.buildHasExpression("hasAny", list);
    }
    /**
     * Determine whether all elements in the list are present in another list.
     */
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
        expression.push(RulesExpression.l `)`);
        return new RulesBoolean(new RulesExpression(expression));
    }
}
//# sourceMappingURL=RulesList.js.map