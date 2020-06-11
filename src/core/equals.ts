import {RulesExpression} from "./RulesExpression";

export function equals(left: any, right: any) {
    return new RulesExpression(left, RulesExpression.l` == `, right);
}
