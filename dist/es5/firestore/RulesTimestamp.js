"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RulesTimestamp = void 0;
var tslib_1 = require("tslib");
var RulesExpression_1 = require("../core/RulesExpression");
var RulesInteger_1 = require("./RulesInteger");
var RulesValue_1 = require("./RulesValue");
/**
 * A timestamp in UTC with nanosecond accuracy.
 *
 * @see https://firebase.google.com/docs/reference/rules/rules.Timestamp
 */
var RulesTimestamp = /** @class */ (function (_super) {
    tslib_1.__extends(RulesTimestamp, _super);
    function RulesTimestamp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RulesTimestamp.prototype.date = function () {
        return new RulesTimestamp(new RulesExpression_1.RulesExpression(RulesExpression_1.RulesExpression.l(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["("], ["("]))), this, RulesExpression_1.RulesExpression.l(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject([").date()"], [").date()"])))));
    };
    RulesTimestamp.prototype.day = function () {
        return this.integerMethodExpression("day");
    };
    RulesTimestamp.prototype.dayOfWeek = function () {
        return this.integerMethodExpression("dayOfWeek");
    };
    RulesTimestamp.prototype.dayOfYear = function () {
        return this.integerMethodExpression("dayOfYear");
    };
    RulesTimestamp.prototype.hours = function () {
        return this.integerMethodExpression("hours");
    };
    RulesTimestamp.prototype.minutes = function () {
        return this.integerMethodExpression("minutes");
    };
    RulesTimestamp.prototype.month = function () {
        return this.integerMethodExpression("month");
    };
    RulesTimestamp.prototype.nanos = function () {
        return this.integerMethodExpression("nanos");
    };
    RulesTimestamp.prototype.seconds = function () {
        return this.integerMethodExpression("seconds");
    };
    RulesTimestamp.prototype.toMillis = function () {
        return this.integerMethodExpression("toMillis");
    };
    RulesTimestamp.prototype.year = function () {
        return this.integerMethodExpression("year");
    };
    RulesTimestamp.prototype.integerMethodExpression = function (method) {
        return new RulesInteger_1.RulesInteger(new RulesExpression_1.RulesExpression(RulesExpression_1.RulesExpression.l(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["("], ["("]))), this, RulesExpression_1.RulesExpression.l(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject([").", "()"], [").", "()"])), method)));
    };
    return RulesTimestamp;
}(RulesValue_1.RulesValue));
exports.RulesTimestamp = RulesTimestamp;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=RulesTimestamp.js.map