"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allow = void 0;
function allow() {
    var operation = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        operation[_i] = arguments[_i];
    }
    return function (targetClass, propertyKey, descriptor) {
        var classConstructor = targetClass.constructor;
        if (!classConstructor.__rulesMatchAllows) {
            classConstructor.__rulesMatchAllows = [];
        }
        classConstructor.__rulesMatchAllows.push({
            operations: operation,
            body: function (thiz) { return descriptor.value.apply(thiz); }
        });
    };
}
exports.allow = allow;
//# sourceMappingURL=allow.js.map