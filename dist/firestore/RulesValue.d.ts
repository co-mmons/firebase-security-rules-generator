import { RulesValue as $RulesValue } from "../core/RulesValue";
import { RulesBoolean } from "./RulesBoolean";
export declare class RulesValue extends $RulesValue {
    isNotNull(): RulesBoolean;
    isNull(): RulesBoolean;
    equals(other: any, not?: boolean): RulesBoolean;
}
