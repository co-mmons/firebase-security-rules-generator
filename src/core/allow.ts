import {InternalMatchConstructor} from "../internal";

export type AllowOperatation = "get" | "list" | "query" | "read" | "delete" | "update" | "create" | "write";

export function allow(...operation: AllowOperatation[]) {
    return function (targetClass: any, propertyKey: string, descriptor: PropertyDescriptor) {

        const classConstructor: InternalMatchConstructor = targetClass.constructor;

        if (!classConstructor.__rulesMatchAllows) {
            classConstructor.__rulesMatchAllows = [];
        }

        classConstructor.__rulesMatchAllows.push({
            operations: operation,
            body: (thiz) => (descriptor.value as Function).apply(thiz)
        });
    }
}
