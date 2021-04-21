import { RulesExpression } from "../core/RulesExpression";
import { RulesBoolean } from "./RulesBoolean";
import { RulesString } from "./RulesString";
import { RulesValue } from "./RulesValue";
export function ifElse(trueExpression, whenTrueValue, elseValue) {
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
    const expression = new RulesExpression(RulesExpression.l `(`, trueExpression, RulesExpression.l `) ? (`, whenTrueValue, RulesExpression.l `) : (`, elseValue || RulesExpression.l `null`, RulesExpression.l `)`);
    if ((arguments.length === 2 && whenTrueValue instanceof RulesValue) || (elseValue && whenTrueValue.constructor === elseValue.constructor)) {
        const valueType = whenTrueValue.constructor;
        return new valueType(expression);
    }
    else {
        return new RulesValue(expression);
    }
}
//# sourceMappingURL=ifElse.js.map