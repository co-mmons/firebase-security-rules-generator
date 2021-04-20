import { RulesExpression } from "../core/RulesExpression";
import { RulesPath } from "./RulesPath";
import { RulesResourceUnknownData } from "./RulesResource";
/**
 * Get the contents of a firestore document.
 *
 * @see https://firebase.google.com/docs/reference/rules/rules.firestore#.get
 */
export function get(path) {
    const resource = new RulesResourceUnknownData();
    resource.__rulesExpression = new RulesExpression(RulesExpression.l `get(`, typeof path === "string" ? RulesPath.value(path) : path, RulesExpression.l `)`);
    return resource;
}
//# sourceMappingURL=get.js.map