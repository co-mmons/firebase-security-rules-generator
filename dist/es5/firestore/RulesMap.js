"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RulesMap = void 0;
var tslib_1 = require("tslib");
var RulesExpression_1 = require("../core/RulesExpression");
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
    /**
     * Returns the value associated with a given search key string.
     *
     * For nested Maps, involving keys and sub-keys, returns the value associated
     * with a given sub-key string. The sub-key is identified using a list, the first item of
     * which is a top-level key and the last item the sub-key whose
     * value is to be looked up and returned. See the nested Map example below.
     *
     * The function requires a default value to return if no match to the given search key is found.
     *
     * @param key Either a key specified as a string, or for nested Maps, a sub-key specified using list syntax.
     * @param valueType Type of returned value.
     * @param defaultValue Value to return if the map does not contain the given search key.
     */
    RulesMap.prototype.get = function (key, valueType, defaultValue) {
        var type = new (valueType || RulesValue_1.RulesValue);
        type.__rulesExpression = new RulesExpression_1.RulesExpression(RulesExpression_1.RulesExpression.l(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["("], ["("]))), this, RulesExpression_1.RulesExpression.l(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject([")"], [")"]))), RulesExpression_1.RulesExpression.l(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject([".get("], [".get("]))), key, RulesExpression_1.RulesExpression.l(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject([")"], [")"]))));
        return type;
    };
    return RulesMap;
}(RulesValue_1.RulesValue));
exports.RulesMap = RulesMap;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=RulesMap.js.map