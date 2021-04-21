import { RulesExpression } from "./RulesExpression";
import { RulesValue } from "./RulesValue";
export declare function whenTrue(trueExpression: RulesValue | RulesExpression, whenTrueValue: RulesValue): RulesValue;
export declare function whenTrue(trueExpression: RulesValue | RulesExpression, whenTrueValue: RulesExpression): RulesExpression;
export declare function whenTrue(trueExpression: RulesValue | RulesExpression, whenTrueValue: string): string;
export declare function whenTrue(trueExpression: RulesValue | RulesExpression, whenTrueValue: number): number;
export declare function whenTrue(trueExpression: RulesValue | RulesExpression, whenTrueValue: boolean): boolean;
