/**
 * Get the contents of a firestore document.
 *
 * {@link https://firebase.google.com/docs/reference/rules/rules.firestore#.get}
 */
import { RulesExpression } from "../core/RulesExpression";
import { get } from "./get";
export function getData(path, dataType) {
    const data = new dataType();
    data.__rulesExpression = new RulesExpression(RulesExpression.l `__getResourceData(`, get(path), RulesExpression.l `)`);
    return data;
}
//# sourceMappingURL=getData.js.map