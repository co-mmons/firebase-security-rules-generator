import {concatExpression, RulesString as $RulesString, substringExpression} from "../core/RulesString";
import {RulesValue} from "./RulesValue";

export class RulesString extends RulesValue implements $RulesString {

    concat(...strings: Array<RulesString | string>): RulesString {
        return new RulesString(concatExpression(this, ...strings));
    }

    substring(start: number, end: number): RulesString {
        return new RulesString(substringExpression(this, start, end));
    }


}
