import {ifElse} from "./ifElse";
import {RulesExpression} from "./RulesExpression";
import {RulesValue} from "./RulesValue";

export function whenTrue<T = RulesValue | RulesExpression | string | number | boolean>(trueExpression: RulesValue | RulesExpression, whenTrueValue: T): T {
    return ifElse(trueExpression, whenTrueValue, "null") as unknown as T;
}
