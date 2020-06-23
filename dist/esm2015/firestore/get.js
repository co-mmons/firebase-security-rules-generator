/**
 * Get the contents of a firestore document.
 *
 * {@link https://firebase.google.com/docs/reference/rules/rules.firestore#.get}
 */
import { RulesExpression } from "../core/RulesExpression";
import { RulesPath } from "./RulesPath";
import { RulesResource } from "./RulesResource";
export function get(path) {
    const resource = new RulesResource();
    resource.__rulesExpression = new RulesExpression(RulesExpression.l `get(`, typeof path === "string" ? RulesPath.value(path) : path, RulesExpression.l `)`);
    return resource;
}
//# sourceMappingURL=get.js.map