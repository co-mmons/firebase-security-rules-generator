import { RulesExpression } from "../core/RulesExpression";
import { RulesInteger } from "./RulesInteger";
import { RulesValue } from "./RulesValue";
/**
 * A timestamp in UTC with nanosecond accuracy.
 *
 * @see https://firebase.google.com/docs/reference/rules/rules.Timestamp
 */
export class RulesTimestamp extends RulesValue {
    date() {
        return new RulesTimestamp(new RulesExpression(RulesExpression.l `(`, this, RulesExpression.l `).date()`));
    }
    day() {
        return this.integerMethodExpression("day");
    }
    dayOfWeek() {
        return this.integerMethodExpression("dayOfWeek");
    }
    dayOfYear() {
        return this.integerMethodExpression("dayOfYear");
    }
    hours() {
        return this.integerMethodExpression("hours");
    }
    minutes() {
        return this.integerMethodExpression("minutes");
    }
    month() {
        return this.integerMethodExpression("month");
    }
    nanos() {
        return this.integerMethodExpression("nanos");
    }
    seconds() {
        return this.integerMethodExpression("seconds");
    }
    toMillis() {
        return this.integerMethodExpression("toMillis");
    }
    year() {
        return this.integerMethodExpression("year");
    }
    integerMethodExpression(method) {
        return new RulesInteger(new RulesExpression(RulesExpression.l `(`, this, RulesExpression.l `).${method}()`));
    }
}
//# sourceMappingURL=RulesTimestamp.js.map