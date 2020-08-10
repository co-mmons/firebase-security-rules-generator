"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deny = exports.allow = void 0;
function allow() {
    var operation = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        operation[_i] = arguments[_i];
    }
    return function (targetClass, propertyKey, descriptor) {
        allowImpl(targetClass, propertyKey, descriptor, operation, false);
    };
}
exports.allow = allow;
function deny() {
    var operation = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        operation[_i] = arguments[_i];
    }
    return function (targetClass, propertyKey, descriptor) {
        allowImpl(targetClass, propertyKey, descriptor, operation, true);
    };
}
exports.deny = deny;
function allowImpl(targetClass, propertyKey, descriptor, operations, negate) {
    var classConstructor = targetClass.constructor;
    if (!classConstructor.hasOwnProperty("__rulesMatchAllows") && !classConstructor.__rulesMatchAllows) {
        classConstructor.__rulesMatchAllows = [];
    }
    classConstructor.__rulesMatchAllows.push({
        operations: operations,
        negate: negate,
        body: function (thiz) { return descriptor.value.apply(thiz); }
    });
}
//# sourceMappingURL=allowDeny.js.map