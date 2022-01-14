"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addedOrChangedKeysMapDiffNative = void 0;
const RulesExpression_1 = require("../core/RulesExpression");
exports.addedOrChangedKeysMapDiffNative = RulesExpression_1.RulesExpression.l `function __MapDiff_addedOrChangedKeys(diff) {
    return diff.addedKeys().union(diff.changedKeys());
}`;
//# sourceMappingURL=addedOrChangedKeysMapDiffNative.js.map