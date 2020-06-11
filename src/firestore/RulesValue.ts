import {RulesValue as $RulesValue} from "../core/RulesValue";
import {equals} from "./equals";
import {RulesBoolean} from "./RulesBoolean";

export class RulesValue extends $RulesValue {

    equals(other: any): RulesBoolean {
        return equals(this, other);
    }
}
