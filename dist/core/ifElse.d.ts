import { RulesExpression } from "./RulesExpression";
import { RulesValue } from "./RulesValue";
declare type Value = RulesValue | RulesExpression | string | number | boolean;
export declare function ifElse<T = Value, F = Value>(trueExpression: RulesValue | RulesExpression, whenTrueValue: T, elseValue: F): T | F;
export {};
