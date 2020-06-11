"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RulesExpression = void 0;
var tslib_1 = require("tslib");
var RulesValue_1 = require("./RulesValue");
var RulesExpression = /** @class */ (function () {
    function RulesExpression() {
        var expression = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            expression[_i] = arguments[_i];
        }
        this.expression = expression;
    }
    RulesExpression.prototype.writeImpl = function (writer, expression) {
        if (expression === null || expression === undefined) {
            return writer.write("null");
        }
        else if (Array.isArray(expression)) {
            for (var _i = 0, expression_1 = expression; _i < expression_1.length; _i++) {
                var e = expression_1[_i];
                this.writeImpl(writer, e);
            }
        }
        else if (expression instanceof RulesExpression) {
            return expression.write(writer);
        }
        else if (expression instanceof RulesValue_1.RulesValue) {
            return writer.write(expression.toString());
        }
        else if (typeof expression === "string") {
            return writer.write("\"" + expression + "\"");
        }
        else {
            return writer.write(expression.toString());
        }
    };
    RulesExpression.prototype.write = function (writer) {
        this.writeImpl(writer, this.expression);
    };
    return RulesExpression;
}());
exports.RulesExpression = RulesExpression;
(function (RulesExpression) {
    function l(strings) {
        var expr = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            expr[_i - 1] = arguments[_i];
        }
        return new /** @class */ (function (_super) {
            tslib_1.__extends(class_1, _super);
            function class_1() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            class_1.prototype.write = function (writer) {
                for (var i = 0; i < strings.length; i++) {
                    writer.write(strings[i] + (expr[i] || ""));
                }
            };
            return class_1;
        }(RulesExpression));
    }
    RulesExpression.l = l;
    function newLine() {
        return new /** @class */ (function (_super) {
            tslib_1.__extends(class_2, _super);
            function class_2() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            class_2.prototype.write = function (writer) {
                writer.line();
            };
            return class_2;
        }(RulesExpression));
    }
    RulesExpression.newLine = newLine;
    function identUp() {
        return new /** @class */ (function (_super) {
            tslib_1.__extends(class_3, _super);
            function class_3() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            class_3.prototype.write = function (writer) {
                writer.indentUp();
            };
            return class_3;
        }(RulesExpression));
    }
    RulesExpression.identUp = identUp;
    function identDown() {
        return new /** @class */ (function (_super) {
            tslib_1.__extends(class_4, _super);
            function class_4() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            class_4.prototype.write = function (writer) {
                writer.indentDown();
            };
            return class_4;
        }(RulesExpression));
    }
    RulesExpression.identDown = identDown;
})(RulesExpression = exports.RulesExpression || (exports.RulesExpression = {}));
exports.RulesExpression = RulesExpression;
//# sourceMappingURL=RulesExpression.js.map