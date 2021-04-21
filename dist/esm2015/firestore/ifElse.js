import { RulesExpression } from "../core/RulesExpression";
import { RulesBoolean } from "./RulesBoolean";
import { RulesString } from "./RulesString";
export function ifElse(trueExpression, whenTrueValue, elseValue = null) {
    if (typeof whenTrueValue === "string") {
        whenTrueValue = new RulesString(new RulesExpression(whenTrueValue));
    }
    else if (typeof whenTrueValue === "boolean") {
        whenTrueValue = new RulesBoolean(new RulesExpression(whenTrueValue));
    }
    if (typeof elseValue === "string") {
        elseValue = new RulesString(new RulesExpression(elseValue));
    }
    else if (typeof elseValue === "boolean") {
        elseValue = new RulesBoolean(new RulesExpression(elseValue));
    }
    return new RulesExpression(RulesExpression.l `(`, trueExpression, RulesExpression.l `) ? (`, whenTrueValue, RulesExpression.l `) : (`, elseValue || RulesExpression.l `null`, RulesExpression.l `)`);
}
//# sourceMappingURL=ifElse.js.map