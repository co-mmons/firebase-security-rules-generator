import { RulesExpression } from "./RulesExpression";
import { RulesValue } from "./RulesValue";
export declare function whenTrue<T extends RulesValue>(trueExpression: RulesValue | RulesExpression, whenTrueValue: T): T;
export declare function whenTrue(trueExpression: RulesValue | RulesExpression, whenTrueValue: RulesExpression): RulesValue;
