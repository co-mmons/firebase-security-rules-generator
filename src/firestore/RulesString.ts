import {
    concatExpression,
    RulesString as $RulesString,
    sizeExpression,
    substringExpression,
    trimExpression
} from "../core/RulesString";
import {RulesInteger} from "./RulesInteger";
import {RulesValue} from "./RulesValue";

export class RulesString extends RulesValue implements $RulesString {

    trim(): RulesString {
        return new RulesString(trimExpression(this));
    }

    size(): RulesInteger {
        return new RulesInteger(sizeExpression(this));
    }

    concat(...strings: Array<RulesString | string>): RulesString {
        return new RulesString(concatExpression(this, ...strings));
    }

    substring(start: number, end: number): RulesString {
        return new RulesString(substringExpression(this, start, end));
    }


}
