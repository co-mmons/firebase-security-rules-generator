import {RulesExpression} from "../core/RulesExpression";
import {RulesBoolean} from "./RulesBoolean";
import {RulesString} from "./RulesString";
import {RulesValue} from "./RulesValue";

type Value = RulesValue | RulesExpression | string | boolean;

export function ifElse(trueExpression: RulesValue | RulesExpression, whenTrueValue: Value, elseValue: Value = null) {

    if (typeof whenTrueValue === "string") {
        whenTrueValue = new RulesString(new RulesExpression(whenTrueValue));
    } else if (typeof whenTrueValue === "boolean") {
        whenTrueValue = new RulesBoolean(new RulesExpression(whenTrueValue));
    }

    if (typeof elseValue === "string") {
        elseValue = new RulesString(new RulesExpression(elseValue));
    } else if (typeof elseValue === "boolean") {
        elseValue = new RulesBoolean(new RulesExpression(elseValue));
    }

    return new RulesExpression(RulesExpression.l`(`, trueExpression, RulesExpression.l`) ? (`, whenTrueValue, RulesExpression.l`) : (`, elseValue || RulesExpression.l`null`, RulesExpression.l`)`);
}
