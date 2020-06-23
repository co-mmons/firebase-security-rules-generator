import { __makeTemplateObject } from "tslib";
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
    return new RulesBoolean(new RulesExpression(RulesExpression.l(templateObject_1 || (templateObject_1 = __makeTemplateObject(["exists("], ["exists("]))), typeof path === "string" ? RulesPath.value(path) : path, RulesExpression.l(templateObject_2 || (templateObject_2 = __makeTemplateObject([")"], [")"])))));
}
var templateObject_1, templateObject_2;
//# sourceMappingURL=exists.js.map