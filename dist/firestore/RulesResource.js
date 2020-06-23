"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RulesResource = void 0;
var tslib_1 = require("tslib");
var RulesExpression_1 = require("../core/RulesExpression");
var RulesValue_1 = require("../core/RulesValue");
var RulesMap_1 = require("./RulesMap");
var RulesPath_1 = require("./RulesPath");
var RulesString_1 = require("./RulesString");
var RulesResource = /** @class */ (function (_super) {
    tslib_1.__extends(RulesResource, _super);
    function RulesResource(data) {
        if (data === void 0) { data = new RulesMap_1.RulesMap; }
        var _this = _super.call(this) || this;
        _this.data = data;
        _this.id = new RulesString_1.RulesString;
        _this.__name__ = new RulesPath_1.RulesPath;
        return _this;
    }
    RulesResource.prototype.dataAs = function (dataType) {
        var data = new dataType();
        data.__rulesExpression = new RulesExpression_1.RulesExpression(this, RulesExpression_1.RulesExpression.l(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject([".data"], [".data"]))));
        return data;
    };
    return RulesResource;
}(RulesValue_1.RulesValue));
exports.RulesResource = RulesResource;
var templateObject_1;
//# sourceMappingURL=RulesResource.js.map