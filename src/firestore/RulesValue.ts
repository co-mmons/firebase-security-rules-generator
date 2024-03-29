import {RulesExpression} from "../core/RulesExpression";
import {RulesValue as $RulesValue} from "../core/RulesValue";
import {equals} from "./equals";
import {RulesBoolean} from "./RulesBoolean";

export class RulesValue extends $RulesValue {

    isNotNull() {
        return new RulesBoolean(new RulesExpression(this, RulesExpression.l` != null`));
    }

    isNull() {
        return new RulesBoolean(new RulesExpression(this, RulesExpression.l` == null`));
    }

    equals(other: any, not?: boolean): RulesBoolean {
        return equals(this, other, not);
    }

    notEquals(other: any): RulesBoolean {
        return equals(this, other, true);
    }
}
