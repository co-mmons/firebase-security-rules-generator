/**
 * Map type, used for simple key-value mappings.
 *
 */
import { AssignableType } from "../utils/Type";
import { RulesInteger } from "./RulesNumber";
import { RulesValue } from "./RulesValue";
export interface RulesList {
    size(): RulesInteger;
    get(index: number, valueType?: AssignableType<RulesValue>): RulesValue;
}
