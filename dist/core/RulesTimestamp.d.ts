import { RulesInteger } from "./RulesInteger";
/**
 * @see https://firebase.google.com/docs/reference/rules/rules.Timestamp
 */
export interface RulesTimestamp {
    /**
     * @see https://firebase.google.com/docs/reference/rules/rules.Timestamp#date
     */
    date(): RulesTimestamp;
    /**
     * @see https://firebase.google.com/docs/reference/rules/rules.Timestamp#day
     */
    day(): RulesInteger;
    /**
     * @see https://firebase.google.com/docs/reference/rules/rules.Timestamp#dayOfWeek
     */
    dayOfWeek(): RulesInteger;
    /**
     * @see https://firebase.google.com/docs/reference/rules/rules.Timestamp#dayOfYear
     */
    dayOfYear(): RulesInteger;
    /**
     * @see https://firebase.google.com/docs/reference/rules/rules.Timestamp#hours
     */
    hours(): RulesInteger;
    /**
     * @see https://firebase.google.com/docs/reference/rules/rules.Timestamp#minutes
     */
    minutes(): RulesInteger;
    /**
     * @see https://firebase.google.com/docs/reference/rules/rules.Timestamp#month
     */
    month(): RulesInteger;
    /**
     * @see https://firebase.google.com/docs/reference/rules/rules.Timestamp#nanos
     */
    nanos(): RulesInteger;
    /**
     * @see https://firebase.google.com/docs/reference/rules/rules.Timestamp#seconds
     */
    seconds(): RulesInteger;
    /**
     * @see https://firebase.google.com/docs/reference/rules/rules.Timestamp#toMillis
     */
    toMillis(): RulesInteger;
    /**
     * @see https://firebase.google.com/docs/reference/rules/rules.Timestamp#year
     */
    year(): RulesInteger;
}
