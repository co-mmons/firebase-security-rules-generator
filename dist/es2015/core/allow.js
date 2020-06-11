"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allow = void 0;
function allow(...operation) {
    return function (targetClass, propertyKey, descriptor) {
        const classConstructor = targetClass.constructor;
        if (!classConstructor.__rulesMatchAllows) {
            classConstructor.__rulesMatchAllows = [];
        }
        classConstructor.__rulesMatchAllows.push({
            operations: operation,
            body: (thiz) => descriptor.value.apply(thiz)
        });
    };
}
exports.allow = allow;
//# sourceMappingURL=allow.js.map