import { RulesBoolean } from "../RulesBoolean";
import { RulesList } from "../RulesList";
import { RulesInteger } from "../RulesNumber";
export interface RulesString {
    trim(): RulesString;
    size(): RulesInteger;
    /**
     * @see https://firebase.google.com/docs/reference/rules/rules.String?hl=en#split
     */
    split(re: RulesString | string): RulesList;
    /**
     * Performs a regular expression match on the whole string.
     *
     * @param re A regular expression using Google RE2 syntax. Value must not be null.
     * @return Non-null RulesBoolean true if the whole string matches, false otherwise.
     *
     * @see https://firebase.google.com/docs/reference/rules/rules.String#matches
     */
    matches(re: RulesString | string): RulesBoolean;
    concat(...strings: Array<RulesString | string>): RulesString;
    /**
     * The substring() method returns the part of the string between the start and end indexes (0 based), or to the end of the string.
     */
    substring(start: number, end: number): RulesString;
}
