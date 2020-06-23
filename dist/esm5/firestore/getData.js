import { __makeTemplateObject } from "tslib";
import { RulesExpression } from "../core/RulesExpression";
import { get } from "./get";
/**
 * Get data of resource denoted by given path. Inside it's using {@link get} to access a resource.
 *
 * @param path Path to a resource.
 * @param dataType Type of data, that is contained within given resource. By default {@link RulesMap} is used.
 * @return Data or null if resource not exists.
 *
 * @see https://firebase.google.com/docs/reference/rules/rules.firestore#.get
 */
export function getData(path, dataType) {
    var data = new dataType();
    data.__rulesExpression = new RulesExpression(RulesExpression.l(templateObject_1 || (templateObject_1 = __makeTemplateObject(["__getResourceData("], ["__getResourceData("]))), get(path), RulesExpression.l(templateObject_2 || (templateObject_2 = __makeTemplateObject([")"], [")"]))));
    return data;
}
var templateObject_1, templateObject_2;
//# sourceMappingURL=getData.js.map