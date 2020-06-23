import {RulesExpression} from "../core/RulesExpression";
import {InternalRulesValue} from "../internal";
import {RulesMap} from "./RulesMap";
import {RulesPath} from "./RulesPath";
import {RulesResource} from "./RulesResource";

/**
 * Get the contents of a firestore document.
 *
 * @see https://firebase.google.com/docs/reference/rules/rules.firestore#.get
 */
export function get<D extends RulesMap>(path: RulesPath | string): RulesResource {
    const resource = new RulesResource();
    (resource as any as InternalRulesValue).__rulesExpression = new RulesExpression(RulesExpression.l`get(`, typeof path === "string" ? RulesPath.value(path) : path, RulesExpression.l`)`);
    return resource;
}
