import {RulesExpression} from "../core/RulesExpression";
import {RulesList as $RulesList} from "../core/RulesList";
import {RulesBoolean} from "./RulesBoolean";
import {RulesInteger} from "./RulesInteger";
import {RulesValue} from "./RulesValue";

/**
 * List type. Items are not necessarily homogenous.
 *
 * {@link https://firebase.google.com/docs/reference/rules/rules.List}
 */
export class RulesList<T = any> extends RulesValue implements $RulesList {

    constructor();

    constructor(array: Array<string | number>);

    constructor(expression: RulesExpression);

    constructor(arrayOrExpression?: Array<string | number> | RulesExpression) {
        if (Array.isArray(arrayOrExpression)) {
            super(new RulesExpression(RulesExpression.l`[`,arrayOrExpression, RulesExpression.l`]`));
        } else if (arrayOrExpression) {
            super(arrayOrExpression);
        } else {
            super();
        }
    }

    /**
     * Get the number of values in the list.
     */
    size() {
        return new RulesInteger(new RulesExpression(this, RulesExpression.l`.size()`));
    }

    /**
     * Determine whether the list contains all elements in another list.
     */
    hasAll(list: RulesList | Array<RulesValue | string | number | boolean>) {
        return this.buildHasExpression("hasAny", list);
    }

    /**
     * Determine whether the list contains any element in another list.
     */
    hasAny(list: RulesList | Array<RulesValue | string | number | boolean>) {
        return this.buildHasExpression("hasAny", list);
    }

    /**
     * Determine whether all elements in the list are present in another list.
     */
    hasOnly(list: RulesList | Array<RulesValue | string | number | boolean>) {
        return this.buildHasExpression("hasOnly", list);
    }

    private buildHasExpression(method: "hasOnly" | "hasAny" | "hasAll", list: RulesList | Array<RulesValue | string | number | boolean>) {

        const expression: any[] = [this, RulesExpression.l`.${method}(`];

        if (list instanceof Array) {
            expression.push(RulesExpression.l`[`);

            for (let i = 0; i < list.length; i++) {

                if (i > 0) {
                    expression.push(RulesExpression.l`, `);
                }

                expression.push(list[i]);
            }

            expression.push(RulesExpression.l`]`);
        }

        expression.push(RulesExpression.l`)`);

        return new RulesBoolean(new RulesExpression(expression));
    }

}
