import {RulesExpression} from "./RulesExpression";

export function equals(left: any, right: any): RulesExpression {
    return new RulesExpression(left, RulesExpression.l` == `, right);
}
