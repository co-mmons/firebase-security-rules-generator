import {RulesExpression} from "../core/RulesExpression";
import {RulesTimestamp as $RulesTimestamp} from "../core/RulesTimestamp";
import {RulesInteger} from "./RulesInteger";
import {RulesValue} from "./RulesValue";

/**
 * A timestamp in UTC with nanosecond accuracy.
 *
 * @see https://firebase.google.com/docs/reference/rules/rules.Timestamp
 */
export class RulesTimestamp extends RulesValue implements $RulesTimestamp {

    date(): RulesTimestamp {
        return new RulesTimestamp(new RulesExpression(RulesExpression.l`(`, this, RulesExpression.l`).date()`));
    }

    day(): RulesInteger {
        return this.integerMethodExpression("day");
    }

    dayOfWeek(): RulesInteger {
        return this.integerMethodExpression("dayOfWeek");
    }

    dayOfYear(): RulesInteger {
        return this.integerMethodExpression("dayOfYear");
    }

    hours(): RulesInteger {
        return this.integerMethodExpression("hours");
    }

    minutes(): RulesInteger {
        return this.integerMethodExpression("minutes");
    }

    month(): RulesInteger {
        return this.integerMethodExpression("month");
    }

    nanos(): RulesInteger {
        return this.integerMethodExpression("nanos");
    }

    seconds(): RulesInteger {
        return this.integerMethodExpression("seconds");
    }

    toMillis(): RulesInteger {
        return this.integerMethodExpression("toMillis");
    }

    year(): RulesInteger {
        return this.integerMethodExpression("year");
    }

    private integerMethodExpression(method: string) {
        return new RulesInteger(new RulesExpression(RulesExpression.l`(`, this, RulesExpression.l`).${method}()`));
    }
}
