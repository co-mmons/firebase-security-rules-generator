import {RulesMap as $Map} from "../core/RulesMap";
import {RulesString} from "./RulesString";
import {RulesValue} from "./RulesValue";

/**
 * Map type, used for simple key-value mappings.
 *
 * {@link https://firebase.google.com/docs/reference/rules/rules.Map}
 */
export class RulesMap extends RulesValue implements $Map {

    get(key: RulesString | string, defaultValue?: RulesValue | string | number | boolean) {

    }

}
