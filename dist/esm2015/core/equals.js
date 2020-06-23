import { RulesExpression } from "./RulesExpression";
export function equals(left, right, not) {
    return new RulesExpression(left, RulesExpression.l ` ${not ? '!' : '='}= `, right);
}
//# sourceMappingURL=equals.js.map