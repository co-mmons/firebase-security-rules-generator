"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RulesPathVar = void 0;
var tslib_1 = require("tslib");
var RulesExpression_1 = require("../core/RulesExpression");
var RulesString_1 = require("./RulesString");
var RulesPathVar = /** @class */ (function (_super) {
    tslib_1.__extends(RulesPathVar, _super);
    function RulesPathVar(varName) {
        var _this = _super.call(this) || this;
        _this.__rulesPathVar = true;
        if (varName) {
            _this.__rulesAccessorName = varName;
        }
        _this.__rulesValueAsExpression = function () { return RulesExpression_1.RulesExpression.l(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["", ""], ["", ""])), _this.__rulesAccessorName); };
        return _this;
    }
    return RulesPathVar;
}(RulesString_1.RulesString));
exports.RulesPathVar = RulesPathVar;
var templateObject_1;
//# sourceMappingURL=RulesPathVar.js.map