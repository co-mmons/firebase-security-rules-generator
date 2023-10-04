import { RulesExpression } from "../core/RulesExpression";
import { RulesBoolean } from "./RulesBoolean";
import { RulesPath } from "./RulesPath";
/**
 * @see https://firebase.google.com/docs/reference/rules/rules.firestore#.existsAfter
 */
export function existsAfter(path) {
    return new RulesBoolean(new RulesExpression(RulesExpression.l `existsAfter(`, typeof path === "string" ? RulesPath.value(path) : path, RulesExpression.l `)`));
}
//# sourceMappingURL=existsAfter.js.map