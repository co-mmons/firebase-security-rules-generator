"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAfterData = void 0;
const RulesExpression_1 = require("../core/RulesExpression");
const getAfter_1 = require("./getAfter");
/**
 * Get data of resource denoted by given path. Inside it's using {@link get} to access a resource.
 *
 * @param path Path to a resource.
 * @param dataType Type of data, that is contained within given resource.
 * @return Data or null if resource not exists.
 *
 * @see https://firebase.google.com/docs/reference/rules/rules.firestore#.get
 */
function getAfterData(path, dataType) {
    const data = new dataType();
    data.__rulesExpression = new RulesExpression_1.RulesExpression(RulesExpression_1.RulesExpression.l `__getResourceData(`, (0, getAfter_1.getAfter)(path), RulesExpression_1.RulesExpression.l `)`);
    data.__rulesInitProperties();
    return data;
}
exports.getAfterData = getAfterData;
//# sourceMappingURL=getAfterData.js.map