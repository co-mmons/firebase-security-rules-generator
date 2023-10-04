import {RulesExpression} from "../core/RulesExpression";
import {
    gteExpression,
    gtExpression, lteExpression, ltExpression,
    minusExpression,
    plusExpression,
    RulesNumber as $RulesNumber
} from "../core/RulesNumber";
import {RulesBoolean} from "./RulesBoolean";
import {RulesValue} from "./RulesValue";

export class RulesNumber extends RulesValue implements $RulesNumber {

    gt(other: RulesNumber | number): RulesBoolean {
        return new RulesBoolean(gtExpression(this, other));
    }

    gte(other: RulesNumber | number): RulesBoolean {
        return new RulesBoolean(gteExpression(this, other));
    }

    lt(other: RulesNumber | number): RulesBoolean {
        return new RulesBoolean(ltExpression(this, other));
    }

    lte(other: RulesNumber | number): RulesBoolean {
        return new RulesBoolean(lteExpression(this, other));
    }

    minus(other: RulesNumber | number): RulesNumber {
        return new RulesNumber(minusExpression(this, other));
    }

    plus(other: RulesNumber | number): RulesNumber {
        return new RulesNumber(plusExpression(this, other));
    }

    abs(): RulesNumber {
        return new RulesNumber(new RulesExpression(RulesExpression.l`math.abs(`, this, RulesExpression.l`)`))
    }

}
