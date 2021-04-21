import { RulesExpression } from "./RulesExpression";
import { RulesValue } from "./RulesValue";
declare type Value = RulesValue | RulesExpression | string | number | boolean;
export declare function ifElse(trueExpression: RulesValue | RulesExpression, whenTrueValue: Value, elseValue: Value): RulesValue;
export {};
