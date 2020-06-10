import {Expression} from "./Expression";

export function equals(left: any, right: any): Expression {
    return new Expression(left, Expression.l` == `, right);
}
