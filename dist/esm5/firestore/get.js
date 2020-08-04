import { __makeTemplateObject } from "tslib";
import { RulesExpression } from "../core/RulesExpression";
import { RulesPath } from "./RulesPath";
import { RulesResource } from "./RulesResource";
/**
 * Get the contents of a firestore document.
 *
 * @see https://firebase.google.com/docs/reference/rules/rules.firestore#.get
 */
export function get(path) {
    var resource = new RulesResource();
    resource.__rulesExpression = new RulesExpression(RulesExpression.l(templateObject_1 || (templateObject_1 = __makeTemplateObject(["get("], ["get("]))), typeof path === "string" ? RulesPath.value(path) : path, RulesExpression.l(templateObject_2 || (templateObject_2 = __makeTemplateObject([")"], [")"]))));
    return resource;
}
var templateObject_1, templateObject_2;
//# sourceMappingURL=get.js.map