export function allow(...operation) {
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
//# sourceMappingURL=allow.js.map