import {gteExpression, gtExpression, RulesNumber} from "../core/RulesNumber";
import {RulesInteger as $RulesInteger} from "../core/RulesNumber/RulesInteger";
import {RulesBoolean} from "./RulesBoolean";
import {RulesValue} from "./RulesValue";

export class RulesInteger extends RulesValue implements $RulesInteger {

    gt(other: RulesNumber | number): RulesBoolean {
        return new RulesBoolean(gtExpression(this, other));
    }

    gte(other: RulesNumber | number): RulesBoolean {
        return new RulesBoolean(gteExpression(this, other));
    }

    lt(other: RulesNumber | number): RulesBoolean {
        return new RulesBoolean(gtExpression(this, other));
    }

    lte(other: RulesNumber | number): RulesBoolean {
        return new RulesBoolean(gteExpression(this, other));
    }

}
