import { concatExpression, substringExpression } from "../core/RulesString";
import { trimExpression } from "../core/RulesString/trimExpression";
import { RulesValue } from "./RulesValue";
export class RulesString extends RulesValue {
    trim() {
        return new RulesString(trimExpression(this));
    }
    concat(...strings) {
        return new RulesString(concatExpression(this, ...strings));
    }
    substring(start, end) {
        return new RulesString(substringExpression(this, start, end));
    }
}
//# sourceMappingURL=RulesString.js.map