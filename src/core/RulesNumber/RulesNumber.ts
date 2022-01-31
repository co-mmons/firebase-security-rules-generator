import {RulesBoolean} from "../RulesBoolean";

export interface RulesNumber {

    gt(other: RulesNumber): RulesBoolean;

    gte(other: RulesNumber): RulesBoolean;

    lt(other: RulesNumber): RulesBoolean;

    lte(other: RulesNumber): RulesBoolean;

}
