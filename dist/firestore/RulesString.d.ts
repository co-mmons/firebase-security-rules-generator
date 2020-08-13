import { RulesString as $RulesString } from "../core/RulesString";
import { RulesValue } from "./RulesValue";
export declare class RulesString extends RulesValue implements $RulesString {
    trim(): any;
    concat(...strings: Array<RulesString | string>): RulesString;
    substring(start: number, end: number): RulesString;
}
