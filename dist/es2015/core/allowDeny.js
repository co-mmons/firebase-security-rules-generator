"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deny = exports.allow = void 0;
function allow(...operation) {
    return function (targetClass, propertyKey, descriptor) {
        allowImpl(targetClass, propertyKey, descriptor, operation, false);
    };
}
exports.allow = allow;
function deny(...operation) {
    return function (targetClass, propertyKey, descriptor) {
        allowImpl(targetClass, propertyKey, descriptor, operation, true);
    };
}
exports.deny = deny;
function allowImpl(targetClass, propertyKey, descriptor, operations, negate) {
    const classConstructor = targetClass.constructor;
    const originalFunction = descriptor.value;
    if (!classConstructor.hasOwnProperty("__rulesMatchAllows") && !classConstructor.__rulesMatchAllows) {
        classConstructor.__rulesMatchAllows = [];
    }
    classConstructor.__rulesMatchAllows.push({
        operations,
        negate,
        body: (thiz) => originalFunction.apply(thiz)
    });
}
//# sourceMappingURL=allowDeny.js.map