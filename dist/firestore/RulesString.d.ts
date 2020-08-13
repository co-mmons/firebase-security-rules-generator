import { RulesString as $RulesString } from "../core/RulesString";
import { RulesInteger } from "./RulesInteger";
import { RulesValue } from "./RulesValue";
export declare class RulesString extends RulesValue implements $RulesString {
    trim(): RulesString;
    size(): RulesInteger;
    concat(...strings: Array<RulesString | string>): RulesString;
    substring(start: number, end: number): RulesString;
}
