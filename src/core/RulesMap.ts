/**
 * Map type, used for simple key-value mappings.
 *
 */
import {RulesList} from "./RulesList";

export interface RulesMap {
    [key: string]: any;

    keys(): RulesList;
}
