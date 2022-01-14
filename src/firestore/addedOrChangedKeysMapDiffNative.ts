import {RulesExpression} from "../core/RulesExpression";

export const addedOrChangedKeysMapDiffNative = RulesExpression.l`function __MapDiff_addedOrChangedKeys(diff) {
    return diff.addedKeys().union(diff.changedKeys());
}`;
