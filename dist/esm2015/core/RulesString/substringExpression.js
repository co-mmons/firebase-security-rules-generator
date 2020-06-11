import { RulesExpression } from "../RulesExpression";
export function substringExpression(baseString, start, end) {
    return new RulesExpression(baseString, RulesExpression.l `[`, start, RulesExpression.l `:`, end, RulesExpression.l `]`);
}
//# sourceMappingURL=substringExpression.js.map