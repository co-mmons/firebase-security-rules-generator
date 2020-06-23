import { RulesExpression } from "./RulesExpression";
import { RulesValue } from "./RulesValue";
export declare function andExpression(...parts: Array<RulesExpression | RulesValue | boolean>): RulesExpression;
