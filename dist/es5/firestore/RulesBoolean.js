"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RulesBoolean = void 0;
var tslib_1 = require("tslib");
var RulesExpression_1 = require("../core/RulesExpression");
var not_1 = require("./not");
var RulesValue_1 = require("./RulesValue");
/**
 *  Type representing a boolean value, true or false.
 *
 *  @link https://firebase.google.com/docs/reference/rules/rules.Boolean
 */
var RulesBoolean = /** @class */ (function (_super) {
    tslib_1.__extends(RulesBoolean, _super);
    function RulesBoolean() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Negative value of this boolean.
     */
    RulesBoolean.prototype.not = function () {
        return not_1.not(this);
    };
    return RulesBoolean;
}(RulesValue_1.RulesValue));
exports.RulesBoolean = RulesBoolean;
(function (RulesBoolean) {
    /**
     * Convert string into boolean.
     */
    function value(value) {
        return new RulesBoolean(new RulesExpression_1.RulesExpression(RulesExpression_1.RulesExpression.l(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["bool("], ["bool("]))), value, RulesExpression_1.RulesExpression.l(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject([")"], [")"])))));
    }
    RulesBoolean.value = value;
})(RulesBoolean = exports.RulesBoolean || (exports.RulesBoolean = {}));
exports.RulesBoolean = RulesBoolean;
var templateObject_1, templateObject_2;
//# sourceMappingURL=RulesBoolean.js.map