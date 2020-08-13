import { RulesNumber } from "../core/RulesNumber";
import { RulesInteger as $RulesInteger } from "../core/RulesNumber/RulesInteger";
import { RulesBoolean } from "./RulesBoolean";
import { RulesValue } from "./RulesValue";
export declare class RulesInteger extends RulesValue implements $RulesInteger {
    gt(other: RulesNumber | number): RulesBoolean;
    gte(other: RulesNumber | number): RulesBoolean;
}
