import { gteExpression, gtExpression } from "../core/RulesNumber";
import { RulesBoolean } from "./RulesBoolean";
import { RulesValue } from "./RulesValue";
export class RulesInteger extends RulesValue {
    gt(other) {
        return new RulesBoolean(gtExpression(this, other));
    }
    gte(other) {
        return new RulesBoolean(gteExpression(this, other));
    }
}
//# sourceMappingURL=RulesInteger.js.map