import { RulesExpression } from "../core/RulesExpression";
import { RulesBoolean } from "./RulesBoolean";
import { RulesInteger } from "./RulesInteger";
import { RulesValue } from "./RulesValue";
/**
 * List type. Items are not necessarily homogenous.
 */
export class RulesList extends RulesValue {
    /**
     * Get the number of values in the list.
     *
     * {@link https://firebase.google.com/docs/reference/rules/rules.List#size}
     */
    size() {
        return new RulesInteger(new RulesExpression(this, RulesExpression.l `.size()`));
    }
    /**
     * Determine whether all elements in the list are present in another list.
     */
    hasOnly(list) {
        return new RulesBoolean(new RulesExpression(this, RulesExpression.l `.hasOnly(`, list, RulesExpression.l `)`));
    }
}
//# sourceMappingURL=RulesList.js.map