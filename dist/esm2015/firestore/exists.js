import { RulesExpression } from "../core/RulesExpression";
import { RulesBoolean } from "./RulesBoolean";
import { RulesPath } from "./RulesPath";
/**
 * Check if a document exists.
 *
 * @param path The path. Value must not be null.
 * @see https://firebase.google.com/docs/reference/rules/rules.firestore#.exists
 */
export function exists(path) {
    return new RulesBoolean(new RulesExpression(RulesExpression.l `exists(`, typeof path === "string" ? RulesPath.value(path) : path, RulesExpression.l `)`));
}
//# sourceMappingURL=exists.js.map