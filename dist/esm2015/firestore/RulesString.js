import { concatExpression, sizeExpression, substringExpression, trimExpression } from "../core/RulesString";
import { matchesExpression } from "../core/RulesString/matchesExpression";
import { RulesBoolean } from "./RulesBoolean";
import { RulesInteger } from "./RulesInteger";
import { RulesValue } from "./RulesValue";
export class RulesString extends RulesValue {
    matches(re) {
        return new RulesBoolean(matchesExpression(this, re));
    }
    trim() {
        return new RulesString(trimExpression(this));
    }
    size() {
        return new RulesInteger(sizeExpression(this));
    }
    concat(...strings) {
        return new RulesString(concatExpression(this, ...strings));
    }
    substring(start, end) {
        return new RulesString(substringExpression(this, start, end));
    }
}
//# sourceMappingURL=RulesString.js.map