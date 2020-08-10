"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.match = void 0;
var tslib_1 = require("tslib");
var RulesValue_1 = require("./RulesValue");
function match(path) {
    return function (classConstructor) {
        var internalConstructor = classConstructor;
        internalConstructor.__rulesMatchPath = path;
        return /** @class */ (function (_super) {
            tslib_1.__extends(class_1, _super);
            function class_1() {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var _this = _super.call(this) || this;
                var thiz = _this;
                for (var propertyName in thiz) {
                    var propertyValue = thiz[propertyName];
                    if (!propertyValue) {
                        continue;
                    }
                    if (propertyValue.__rulesPathVar) {
                        if (!propertyValue.__rulesAccessorName) {
                            thiz[propertyName].__rulesAccessorName = propertyName;
                        }
                    }
                    else if (propertyValue instanceof RulesValue_1.RulesValue) {
                        propertyValue.__rulesAccessorName = propertyName;
                        propertyValue.__rulesAccessorContext = "resource.data";
                    }
                }
                return _this;
            }
            return class_1;
        }(classConstructor));
    };
}
exports.match = match;
//# sourceMappingURL=match.js.map