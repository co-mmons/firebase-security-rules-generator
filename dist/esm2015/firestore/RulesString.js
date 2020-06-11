import { concatExpression, substringExpression } from "../core/RulesString";
import { RulesValue } from "./RulesValue";
export class RulesString extends RulesValue {
    concat(otherString) {
        return new RulesString(concatExpression(this, otherString));
    }
    substring(start, end) {
        return new RulesString(substringExpression(this, start, end));
    }
}
//# sourceMappingURL=RulesString.js.map