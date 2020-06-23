import { RulesValue } from "./RulesValue";
/**
 *  Type representing a boolean value, true or false.
 *
 *  @link https://firebase.google.com/docs/reference/rules/rules.Boolean
 */
export declare class RulesBoolean extends RulesValue {
    /**
     * Negative value of this boolean.
     */
    not(): RulesBoolean;
}
export declare namespace RulesBoolean {
    /**
     * Convert string into boolean.
     */
    function value(value: string): RulesBoolean;
}
