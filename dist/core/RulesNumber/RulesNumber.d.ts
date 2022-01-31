import { RulesBoolean } from "../RulesBoolean";
export interface RulesNumber {
    plus(other: RulesNumber | number): RulesNumber;
    minus(other: RulesNumber | number): RulesNumber;
    gt(other: RulesNumber | number): RulesBoolean;
    gte(other: RulesNumber | number): RulesBoolean;
    lt(other: RulesNumber | number): RulesBoolean;
    lte(other: RulesNumber | number): RulesBoolean;
}
