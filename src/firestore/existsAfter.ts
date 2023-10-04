import {RulesExpression} from "../core/RulesExpression";
import {InternalRulesValue} from "../internal";
import {RulesBoolean} from "./RulesBoolean";
import {RulesMap} from "./RulesMap";
import {RulesPath} from "./RulesPath";
import {RulesResource} from "./RulesResource";

/**
 * @see https://firebase.google.com/docs/reference/rules/rules.firestore#.existsAfter
 */
export function existsAfter(path: RulesPath | string) {
    return new RulesBoolean(new RulesExpression(RulesExpression.l`existsAfter(`, typeof path === "string" ? RulesPath.value(path) : path, RulesExpression.l`)`));
}
