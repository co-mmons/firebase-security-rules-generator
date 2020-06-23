"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getData = void 0;
/**
 * Get the contents of a firestore document.
 *
 * {@link https://firebase.google.com/docs/reference/rules/rules.firestore#.get}
 */
const RulesExpression_1 = require("../core/RulesExpression");
const get_1 = require("./get");
function getData(path, dataType) {
    const data = new dataType();
    data.__rulesExpression = new RulesExpression_1.RulesExpression(RulesExpression_1.RulesExpression.l `__getResourceData(`, get_1.get(path), RulesExpression_1.RulesExpression.l `)`);
    return data;
}
exports.getData = getData;
//# sourceMappingURL=getData.js.map