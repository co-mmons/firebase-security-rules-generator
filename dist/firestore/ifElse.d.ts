import { RulesExpression } from "../core/RulesExpression";
import { RulesValue } from "./RulesValue";
declare type Value = RulesValue | RulesExpression | string | boolean;
export declare function ifElse(trueExpression: RulesValue | RulesExpression, whenTrueValue: Value, elseValue?: Value): RulesExpression;
export {};
