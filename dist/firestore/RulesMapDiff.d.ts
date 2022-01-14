import { RulesSet } from "./RulesSet";
import { RulesString } from "./RulesString";
import { RulesValue } from "./RulesValue";
/**
 * Map type, used for simple key-value mappings.
 *
 * {@link https://firebase.google.com/docs/reference/rules/rules.MapDiff}
 */
export declare class RulesMapDiff extends RulesValue {
    addedKeys(): RulesSet<RulesString>;
    affectedKeys(): RulesSet<RulesString>;
    changedKeys(): RulesSet<RulesString>;
    addedOrChangedKeys(): RulesSet<RulesString>;
    removedKeys(): RulesSet<RulesString>;
    unchangedKeys(): RulesSet<RulesString>;
}
