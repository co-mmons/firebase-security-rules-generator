import { RulesExpression } from "../RulesExpression";
import { RulesString } from "./RulesString";
/**
 * @see https://firebase.google.com/docs/reference/rules/rules.String#split
 */
export declare function splitExpression(str: RulesString | string, re: RulesString | string): RulesExpression;
