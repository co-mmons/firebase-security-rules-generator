import {RulesExpression} from "../core/RulesExpression";
import {InternalRulesValue} from "../internal";
import {RulesPath} from "./RulesPath";
import {RulesResourceUnknownData} from "./RulesResource";

/**
 * Get the contents of a firestore document.
 *
 * @see https://firebase.google.com/docs/reference/rules/rules.firestore#.getAfter
 */
export function getAfter(path: RulesPath | string): RulesResourceUnknownData {
    const resource = new RulesResourceUnknownData();
    (resource as any as InternalRulesValue).__rulesExpression = new RulesExpression(RulesExpression.l`getAfter(`, typeof path === "string" ? RulesPath.value(path) : path, RulesExpression.l`)`);
    return resource;
}
