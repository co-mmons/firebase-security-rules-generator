import { RulesExpression } from "./RulesExpression";
import { RulesValue } from "./RulesValue";
export declare function whenTrue<T = RulesValue | RulesExpression | string | number | boolean>(trueExpression: RulesValue | RulesExpression, whenTrueValue: T): T;
