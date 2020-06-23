import { RulesExpression } from "../core/RulesExpression";
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
        return new RulesInteger(new RulesExpression(this, RulesExpression.l `.length`));
    }
}
//# sourceMappingURL=RulesList.js.map