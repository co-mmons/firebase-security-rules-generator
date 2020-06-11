import {RulesExpression} from "./RulesExpression";
import {RulesValue} from "./RulesValue";

export class RulesString extends RulesValue {

    concat(otherString: RulesString | string) {
        return new RulesString(new RulesExpression(RulesExpression.l`(`, this, RulesExpression.l` + `, otherString, RulesExpression.l`)`));
    }

    /**
     * The substring() method returns the part of the string between the start and end indexes (0 based), or to the end of the string.
     */
    substring(start: number, end: number) {
        return new RulesString(new RulesExpression(this, RulesExpression.l`[`, start, RulesExpression.l`:`, end, RulesExpression.l`]`));
    }
}
