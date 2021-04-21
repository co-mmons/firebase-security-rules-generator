import {RulesExpression} from "../core/RulesExpression";
import {AssignableType} from "../utils/Type";
import {RulesBoolean} from "./RulesBoolean";
import {RulesString} from "./RulesString";
import {RulesValue} from "./RulesValue";

type Value = RulesValue | string | boolean;
type TrueExpression = RulesValue | RulesExpression;

export function ifElse<T = RulesValue>(trueExpression: TrueExpression, whenTrueValue: T): T;

export function ifElse<T = RulesValue>(trueExpression: TrueExpression, whenTrueValue: T, elseValue: T): T;

export function ifElse(trueExpression: TrueExpression, whenTrueValue: string | boolean): RulesValue;

export function ifElse(trueExpression: TrueExpression, whenTrueValue: Value): RulesValue;

export function ifElse(trueExpression: TrueExpression, whenTrueValue: Value, elseValue: Value): RulesValue;

export function ifElse(trueExpression: TrueExpression, whenTrueValue: Value, elseValue?: Value): RulesValue {

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

    const expression = new RulesExpression(RulesExpression.l`(`, trueExpression, RulesExpression.l`) ? (`, whenTrueValue, RulesExpression.l`) : (`, elseValue || RulesExpression.l`null`, RulesExpression.l`)`);

    if ((arguments.length === 2 && whenTrueValue instanceof RulesValue) || (elseValue && whenTrueValue.constructor === elseValue.constructor)) {
        const valueType: AssignableType<RulesValue> = whenTrueValue.constructor as any;
        return new valueType(expression);

    } else {
        return new RulesValue(expression);
    }
}
