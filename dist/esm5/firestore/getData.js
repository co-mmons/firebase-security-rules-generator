import { __makeTemplateObject } from "tslib";
/**
 * Get the contents of a firestore document.
 *
 * {@link https://firebase.google.com/docs/reference/rules/rules.firestore#.get}
 */
import { RulesExpression } from "../core/RulesExpression";
import { get } from "./get";
export function getData(path, dataType) {
    var data = new dataType();
    data.__rulesExpression = new RulesExpression(RulesExpression.l(templateObject_1 || (templateObject_1 = __makeTemplateObject(["__getResourceData("], ["__getResourceData("]))), get(path), RulesExpression.l(templateObject_2 || (templateObject_2 = __makeTemplateObject([")"], [")"]))));
    return data;
}
var templateObject_1, templateObject_2;
//# sourceMappingURL=getData.js.map