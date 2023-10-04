import { RulesExpression } from "../core/RulesExpression";
import { gteExpression, gtExpression, lteExpression, ltExpression, minusExpression, plusExpression } from "../core/RulesNumber";
import { RulesBoolean } from "./RulesBoolean";
import { RulesValue } from "./RulesValue";
export class RulesNumber extends RulesValue {
    gt(other) {
        return new RulesBoolean(gtExpression(this, other));
    }
    gte(other) {
        return new RulesBoolean(gteExpression(this, other));
    }
    lt(other) {
        return new RulesBoolean(ltExpression(this, other));
    }
    lte(other) {
        return new RulesBoolean(lteExpression(this, other));
    }
    minus(other) {
        return new RulesNumber(minusExpression(this, other));
    }
    plus(other) {
        return new RulesNumber(plusExpression(this, other));
    }
    abs() {
        return new RulesNumber(new RulesExpression(RulesExpression.l `math.abs(`, this, RulesExpression.l `)`));
    }
}
//# sourceMappingURL=RulesNumber.js.map