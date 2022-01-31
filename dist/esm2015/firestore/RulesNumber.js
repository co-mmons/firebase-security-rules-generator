import { gteExpression, gtExpression, minusExpression, plusExpression } from "../core/RulesNumber";
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
        return new RulesBoolean(gtExpression(this, other));
    }
    lte(other) {
        return new RulesBoolean(gteExpression(this, other));
    }
    minus(other) {
        return new RulesNumber(minusExpression(this, other));
    }
    plus(other) {
        return new RulesNumber(plusExpression(this, other));
    }
}
//# sourceMappingURL=RulesNumber.js.map