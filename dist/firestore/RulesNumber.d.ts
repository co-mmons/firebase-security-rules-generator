import { RulesNumber as $RulesNumber } from "../core/RulesNumber";
import { RulesBoolean } from "./RulesBoolean";
import { RulesValue } from "./RulesValue";
export declare class RulesNumber extends RulesValue implements $RulesNumber {
    gt(other: RulesNumber | number): RulesBoolean;
    gte(other: RulesNumber | number): RulesBoolean;
    lt(other: RulesNumber | number): RulesBoolean;
    lte(other: RulesNumber | number): RulesBoolean;
    minus(other: RulesNumber | number): RulesNumber;
    plus(other: RulesNumber | number): RulesNumber;
    abs(): RulesNumber;
}
