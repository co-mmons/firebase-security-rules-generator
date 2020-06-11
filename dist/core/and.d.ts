import { RulesExpression } from "./RulesExpression";
import { RulesValue } from "./RulesValue";
export declare function and(...parts: Array<RulesExpression | RulesValue | boolean>): RulesExpression;
