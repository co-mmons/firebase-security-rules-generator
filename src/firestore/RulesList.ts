import {RulesExpression} from "../core/RulesExpression";
import {RulesList as $RulesList} from "../core/RulesList";
import {RulesBoolean} from "./RulesBoolean";
import {RulesInteger} from "./RulesInteger";
import {RulesValue} from "./RulesValue";

/**
 * List type. Items are not necessarily homogenous.
 */
export class RulesList<T = any> extends RulesValue implements $RulesList {

    /**
     * Get the number of values in the list.
     *
     * {@link https://firebase.google.com/docs/reference/rules/rules.List#size}
     */
    size() {
        return new RulesInteger(new RulesExpression(this, RulesExpression.l`.size()`));
    }

    /**
     * Determine whether all elements in the list are present in another list.
     */
    hasOnly(list: RulesList | Array<RulesValue | string | number | boolean>) {

        const expression: any[] = [this, RulesExpression.l`.hasOnly(`];

        if (list instanceof Array) {
            expression.push(RulesExpression.l`[`);

            for (let i = 0; i < list.length; i++) {

                if (i > 0) {
                    expression.push(RulesExpression.l`, `);
                }

                expression.push(list[i]);
            }

            expression.push(RulesExpression.l`[`);
        }

        expression.push(RulesExpression.l`)`);

        return new RulesBoolean(new RulesExpression(expression));
    }

}
