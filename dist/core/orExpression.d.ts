import { RulesExpression } from "./RulesExpression";
import { RulesValue } from "./RulesValue";
export declare function orExpression(...parts: Array<RulesExpression | RulesValue | boolean>): RulesExpression;
