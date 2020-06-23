import { RulesExpression } from "../core/RulesExpression";
import { RulesValue } from "./RulesValue";
/**
 * Map type, used for simple key-value mappings.
 *
 * {@link https://firebase.google.com/docs/reference/rules/rules.Map}
 */
export class RulesMap extends RulesValue {
    /**
     * Returns the value associated with a given search key string.
     *
     * For nested Maps, involving keys and sub-keys, returns the value associated
     * with a given sub-key string. The sub-key is identified using a list, the first item of
     * which is a top-level key and the last item the sub-key whose
     * value is to be looked up and returned. See the nested Map example below.
     *
     * The function requires a default value to return if no match to the given search key is found.
     *
     * @param key Either a key specified as a string, or for nested Maps, a sub-key specified using list syntax.
     * @param valueType Type of returned value.
     * @param defaultValue Value to return if the map does not contain the given search key.
     */
    get(key, valueType, defaultValue) {
        const type = new (valueType || RulesValue);
        type.__rulesExpression = new RulesExpression(RulesExpression.l `(`, this, RulesExpression.l `)`, RulesExpression.l `.get(`, key, RulesExpression.l `)`);
        return type;
    }
}
//# sourceMappingURL=RulesMap.js.map