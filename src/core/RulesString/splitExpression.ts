import {RulesExpression} from "../RulesExpression";
import {RulesString} from "./RulesString";

/**
 * @see https://firebase.google.com/docs/reference/rules/rules.String#split
 */
export function splitExpression(str: RulesString | string, re: RulesString | string) {
    return new RulesExpression(str, RulesExpression.l`.split(`, re, RulesExpression.l`)`);
}
