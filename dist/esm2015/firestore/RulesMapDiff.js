import { RulesExpression } from "../core/RulesExpression";
import { RulesSet } from "./RulesSet";
import { RulesString } from "./RulesString";
import { RulesValue } from "./RulesValue";
/**
 * Map type, used for simple key-value mappings.
 *
 * {@link https://firebase.google.com/docs/reference/rules/rules.MapDiff}
 */
export class RulesMapDiff extends RulesValue {
    addedKeys() {
        return new RulesSet(new RulesExpression(this, RulesExpression.l `.addedKeys()`), RulesString);
    }
    affectedKeys() {
        return new RulesSet(new RulesExpression(this, RulesExpression.l `.affectedKeys()`), RulesString);
    }
    changedKeys() {
        return new RulesSet(new RulesExpression(this, RulesExpression.l `.changedKeys()`), RulesString);
    }
    addedOrChangedKeys() {
        return new RulesSet(new RulesExpression(RulesExpression.l `__MapDiff_addedOrChangedKeys(`, this, RulesExpression.l `)`), RulesString);
    }
    removedKeys() {
        return new RulesSet(new RulesExpression(this, RulesExpression.l `.removedKeys()`), RulesString);
    }
    unchangedKeys() {
        return new RulesSet(new RulesExpression(this, RulesExpression.l `.unchangedKeys()`), RulesString);
    }
}
//# sourceMappingURL=RulesMapDiff.js.map