import { __extends } from "tslib";
import { RulesValue } from "./RulesValue";
export function match(path) {
    return function (classConstructor) {
        var internalConstructor = classConstructor;
        internalConstructor.__rulesMatchPath = path;
        return /** @class */ (function (_super) {
            __extends(class_1, _super);
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
                        if (!propertyValue.__rulesPathVarName) {
                            thiz[propertyName].__rulesPathVarName = propertyName;
                        }
                    }
                    if (propertyValue instanceof RulesValue) {
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
//# sourceMappingURL=match.js.map