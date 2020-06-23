import { RulesTimestamp as $RulesTimestamp } from "../core/RulesTimestamp";
import { RulesInteger } from "./RulesInteger";
import { RulesValue } from "./RulesValue";
/**
 * A timestamp in UTC with nanosecond accuracy.
 *
 * @see https://firebase.google.com/docs/reference/rules/rules.Timestamp
 */
export declare class RulesTimestamp extends RulesValue implements $RulesTimestamp {
    date(): RulesTimestamp;
    day(): RulesInteger;
    dayOfWeek(): RulesInteger;
    dayOfYear(): RulesInteger;
    hours(): RulesInteger;
    minutes(): RulesInteger;
    month(): RulesInteger;
    nanos(): RulesInteger;
    seconds(): RulesInteger;
    toMillis(): RulesInteger;
    year(): RulesInteger;
    private integerMethodExpression;
}
