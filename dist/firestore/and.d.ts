import { RulesExpression } from "../core/RulesExpression";
import { RulesValue } from "../core/RulesValue";
import { RulesBoolean } from "./RulesBoolean";
export declare function and(...parts: Array<RulesExpression | RulesValue | boolean>): RulesBoolean;
