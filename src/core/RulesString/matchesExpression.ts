import {RulesExpression} from "../RulesExpression";
import {RulesString} from "./RulesString";

/**
 * @see https://firebase.google.com/docs/reference/rules/rules.String#matches
 */
export function matchesExpression(str: RulesString | string, re: RulesString | string) {
    return new RulesExpression(str, RulesExpression.l`.matches(`, re, RulesExpression.l`)`);
}
