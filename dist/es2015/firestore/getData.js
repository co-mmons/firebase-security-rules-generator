"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getData = void 0;
const RulesExpression_1 = require("../core/RulesExpression");
const get_1 = require("./get");
/**
 * Get data of resource denoted by given path. Inside it's using {@link get} to access a resource.
 *
 * @param path Path to a resource.
 * @param dataType Type of data, that is contained within given resource.
 * @return Data or null if resource not exists.
 *
 * @see https://firebase.google.com/docs/reference/rules/rules.firestore#.get
 */
function getData(path, dataType) {
    const data = new dataType();
    data.__rulesExpression = new RulesExpression_1.RulesExpression(RulesExpression_1.RulesExpression.l `__getResourceData(`, get_1.get(path), RulesExpression_1.RulesExpression.l `)`);
    data.__rulesInitProperties();
    return data;
}
exports.getData = getData;
//# sourceMappingURL=getData.js.map