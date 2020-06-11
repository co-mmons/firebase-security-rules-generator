"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RulesValue = void 0;
var RulesValue = /** @class */ (function () {
    function RulesValue() {
        var _this = this;
        this.toString = function () { return "" + _this.__rulesAccessContextAsString() + _this.__rulesAccessorName; };
    }
    RulesValue.prototype.__rulesAccessContextAsString = function () {
        if (typeof this.__rulesAccessorContext === "string") {
            return this.__rulesAccessorContext + ".";
        }
        else if (this.__rulesAccessorContext) {
            return this.__rulesAccessorContext.toString() + ".";
        }
        else {
            return "";
        }
    };
    RulesValue.prototype.__rulesInitProperties = function () {
        for (var propertyName in this) {
            var propertyValue = this[propertyName];
            if (propertyValue instanceof RulesValue && !propertyName.startsWith("__rules")) {
                propertyValue.__rulesAccessorName = propertyName;
                propertyValue.__rulesAccessorContext = this;
                propertyValue.__rulesInitProperties();
            }
        }
    };
    RulesValue.prototype.__rulesClone = function () {
        var niu = new this["constructor"];
        niu.__rulesInitProperties();
        return niu;
    };
    return RulesValue;
}());
exports.RulesValue = RulesValue;
//# sourceMappingURL=RulesValue.js.map