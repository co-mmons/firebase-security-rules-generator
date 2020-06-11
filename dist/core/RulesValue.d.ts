import { RulesExpression } from "./RulesExpression";
export declare abstract class RulesValue {
    constructor(expression?: RulesExpression);
    private __rulesExpression?;
    private __rulesAccessorName?;
    private __rulesAccessorContext?;
    private __rulesValueAsExpression;
    private __rulesInitProperties;
    private __rulesClone;
}
