import { RulesExpression } from "../RulesExpression";
import { RulesString } from "./RulesString";
/**
 * @see https://firebase.google.com/docs/reference/rules/rules.String#matches
 */
export declare function matchesExpression(str: RulesString | string, re: RulesString | string): RulesExpression;
