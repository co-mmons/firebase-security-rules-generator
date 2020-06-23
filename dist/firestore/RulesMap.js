"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RulesMap = void 0;
var tslib_1 = require("tslib");
var RulesValue_1 = require("./RulesValue");
/**
 * Map type, used for simple key-value mappings.
 *
 * {@link https://firebase.google.com/docs/reference/rules/rules.Map}
 */
var RulesMap = /** @class */ (function (_super) {
    tslib_1.__extends(RulesMap, _super);
    function RulesMap() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RulesMap.prototype.get = function (key, defaultValue) {
    };
    return RulesMap;
}(RulesValue_1.RulesValue));
exports.RulesMap = RulesMap;
//# sourceMappingURL=RulesMap.js.map