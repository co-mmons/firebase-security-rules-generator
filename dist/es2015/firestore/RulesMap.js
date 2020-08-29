"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RulesMap = void 0;
const RulesExpression_1 = require("../core/RulesExpression");
const RulesList_1 = require("./RulesList");
const RulesValue_1 = require("./RulesValue");
/**
 * Map type, used for simple key-value mappings.
 *
 * {@link https://firebase.google.com/docs/reference/rules/rules.Map}
 */
class RulesMap extends RulesValue_1.RulesValue {
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
        const type = new (valueType || RulesValue_1.RulesValue);
        type.__rulesExpression = new RulesExpression_1.RulesExpression(RulesExpression_1.RulesExpression.l `(`, this, RulesExpression_1.RulesExpression.l `)`, RulesExpression_1.RulesExpression.l `.get(`, key, RulesExpression_1.RulesExpression.l `)`);
        return type;
    }
    keys() {
        return new RulesList_1.RulesList(new RulesExpression_1.RulesExpression(this, RulesExpression_1.RulesExpression.l `.keys()`));
    }
}
exports.RulesMap = RulesMap;
//# sourceMappingURL=RulesMap.js.map