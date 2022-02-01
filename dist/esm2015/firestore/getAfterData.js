import { RulesExpression } from "../core/RulesExpression";
import { getAfter } from "./getAfter";
/**
 * Get data of resource denoted by given path. Inside it's using {@link get} to access a resource.
 *
 * @param path Path to a resource.
 * @param dataType Type of data, that is contained within given resource.
 * @return Data or null if resource not exists.
 *
 * @see https://firebase.google.com/docs/reference/rules/rules.firestore#.get
 */
export function getAfterData(path, dataType) {
    const data = new dataType();
    data.__rulesExpression = new RulesExpression(RulesExpression.l `__getResourceData(`, getAfter(path), RulesExpression.l `)`);
    data.__rulesInitProperties();
    return data;
}
//# sourceMappingURL=getAfterData.js.map