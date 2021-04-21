import { RulesExpression } from "../core/RulesExpression";
import { RulesValue } from "./RulesValue";
declare type TrueExpression = RulesValue | RulesExpression;
export declare function ifElse<T = RulesValue>(trueExpression: TrueExpression, whenTrueValue: T): T;
export declare function ifElse(trueExpression: TrueExpression, whenTrueValue: string | boolean): RulesValue;
export {};
