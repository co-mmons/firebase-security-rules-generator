export function allow() {
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
//# sourceMappingURL=allow.js.map