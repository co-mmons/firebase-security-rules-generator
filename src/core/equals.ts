import {RulesExpression} from "./RulesExpression";

export function equals(left: any, right: any, not?: boolean) {
    return new RulesExpression(left, RulesExpression.l` ${not ? '!' : '='}= `, right);
}
