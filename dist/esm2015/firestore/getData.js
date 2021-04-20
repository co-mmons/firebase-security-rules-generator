import { RulesExpression } from "../core/RulesExpression";
import { get } from "./get";
/**
 * Get data of resource denoted by given path. Inside it's using {@link get} to access a resource.
 *
 * @param path Path to a resource.
 * @param dataType Type of data, that is contained within given resource.
 * @return Data or null if resource not exists.
 *
 * @see https://firebase.google.com/docs/reference/rules/rules.firestore#.get
 */
export function getData(path, dataType) {
    const data = new dataType();
    data.__rulesExpression = new RulesExpression(RulesExpression.l `__getResourceData(`, get(path), RulesExpression.l `)`);
    data.__rulesInitProperties();
    return data;
}
//# sourceMappingURL=getData.js.map