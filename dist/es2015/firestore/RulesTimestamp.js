"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RulesTimestamp = void 0;
const RulesExpression_1 = require("../core/RulesExpression");
const RulesInteger_1 = require("./RulesInteger");
const RulesValue_1 = require("./RulesValue");
/**
 * A timestamp in UTC with nanosecond accuracy.
 *
 * @see https://firebase.google.com/docs/reference/rules/rules.Timestamp
 */
class RulesTimestamp extends RulesValue_1.RulesValue {
    date() {
        return new RulesTimestamp(new RulesExpression_1.RulesExpression(RulesExpression_1.RulesExpression.l `(`, this, RulesExpression_1.RulesExpression.l `).date()`));
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
        return new RulesInteger_1.RulesInteger(new RulesExpression_1.RulesExpression(RulesExpression_1.RulesExpression.l `(`, this, RulesExpression_1.RulesExpression.l `).${method}()`));
    }
}
exports.RulesTimestamp = RulesTimestamp;
//# sourceMappingURL=RulesTimestamp.js.map