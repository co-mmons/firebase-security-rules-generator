import {RulesExpression} from "../core/RulesExpression";
import {RulesMap as $Map} from "../core/RulesMap";
import {InternalRulesValue} from "../internal";
import {AssignableType} from "../utils/Type";
import {RulesList} from "./RulesList";
import {RulesString} from "./RulesString";
import {RulesValue} from "./RulesValue";

/**
 * Map type, used for simple key-value mappings.
 *
 * {@link https://firebase.google.com/docs/reference/rules/rules.Map}
 */
export class RulesMap extends RulesValue implements $Map {

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
    get<T extends RulesValue = RulesValue>(key: RulesString | string | RulesList<RulesString>, valueType?: AssignableType<T>, defaultValue?: T): T {
        const type = new (valueType || RulesValue);
        (type as any as InternalRulesValue).__rulesExpression = new RulesExpression(RulesExpression.l`(`, this, RulesExpression.l`)`, RulesExpression.l`.get(`, key, RulesExpression.l`, `, (defaultValue !== undefined ? defaultValue : RulesExpression.l`null`), RulesExpression.l`)`);
        return type as T;
    }

    keys(): RulesList {
        return new RulesList(new RulesExpression(this, RulesExpression.l`.keys()`));
    }


}
