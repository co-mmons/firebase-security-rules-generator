import { RulesExpression } from "../core/RulesExpression";
import { RulesValue } from "./RulesValue";
export declare function rulesVar<T extends RulesValue | RulesExpression | string | boolean | number>(thiz: any, value: T): T;
