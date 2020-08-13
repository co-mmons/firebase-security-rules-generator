import {RulesExpression} from "../RulesExpression";
import {RulesInteger} from "./RulesInteger";

export function gtExpression<T extends RulesInteger>(left: T, right) {
    return new RulesExpression(left, RulesExpression.l` > `, right);
}
