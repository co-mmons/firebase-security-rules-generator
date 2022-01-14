"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RulesMapDiff = void 0;
const RulesExpression_1 = require("../core/RulesExpression");
const RulesSet_1 = require("./RulesSet");
const RulesString_1 = require("./RulesString");
const RulesValue_1 = require("./RulesValue");
/**
 * Map type, used for simple key-value mappings.
 *
 * {@link https://firebase.google.com/docs/reference/rules/rules.MapDiff}
 */
class RulesMapDiff extends RulesValue_1.RulesValue {
    addedKeys() {
        return new RulesSet_1.RulesSet(new RulesExpression_1.RulesExpression(this, RulesExpression_1.RulesExpression.l `.addedKeys()`), RulesString_1.RulesString);
    }
    affectedKeys() {
        return new RulesSet_1.RulesSet(new RulesExpression_1.RulesExpression(this, RulesExpression_1.RulesExpression.l `.affectedKeys()`), RulesString_1.RulesString);
    }
    changedKeys() {
        return new RulesSet_1.RulesSet(new RulesExpression_1.RulesExpression(this, RulesExpression_1.RulesExpression.l `.changedKeys()`), RulesString_1.RulesString);
    }
    addedOrChangedKeys() {
        return new RulesSet_1.RulesSet(new RulesExpression_1.RulesExpression(RulesExpression_1.RulesExpression.l `__MapDiff_addedOrChangedKeys(`, this, RulesExpression_1.RulesExpression.l `)`), RulesString_1.RulesString);
    }
    removedKeys() {
        return new RulesSet_1.RulesSet(new RulesExpression_1.RulesExpression(this, RulesExpression_1.RulesExpression.l `.removedKeys()`), RulesString_1.RulesString);
    }
    unchangedKeys() {
        return new RulesSet_1.RulesSet(new RulesExpression_1.RulesExpression(this, RulesExpression_1.RulesExpression.l `.unchangedKeys()`), RulesString_1.RulesString);
    }
}
exports.RulesMapDiff = RulesMapDiff;
//# sourceMappingURL=RulesMapDiff.js.map