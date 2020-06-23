"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RulesValue = void 0;
var tslib_1 = require("tslib");
var RulesExpression_1 = require("../core/RulesExpression");
var RulesValue_1 = require("../core/RulesValue");
var equals_1 = require("./equals");
var RulesBoolean_1 = require("./RulesBoolean");
var RulesValue = /** @class */ (function (_super) {
    tslib_1.__extends(RulesValue, _super);
    function RulesValue() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RulesValue.prototype.isNotNull = function () {
        return new RulesBoolean_1.RulesBoolean(new RulesExpression_1.RulesExpression(this, RulesExpression_1.RulesExpression.l(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject([" != null"], [" != null"])))));
    };
    RulesValue.prototype.isNull = function () {
        return new RulesBoolean_1.RulesBoolean(new RulesExpression_1.RulesExpression(this, RulesExpression_1.RulesExpression.l(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject([" == null"], [" == null"])))));
    };
    RulesValue.prototype.equals = function (other, not) {
        return equals_1.equals(this, other, not);
    };
    return RulesValue;
}(RulesValue_1.RulesValue));
exports.RulesValue = RulesValue;
var templateObject_1, templateObject_2;
//# sourceMappingURL=RulesValue.js.map