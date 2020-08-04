import {InternalMatchConstructor} from "../internal";

export type AllowDenyOperatation = "get" | "list" | "query" | "read" | "delete" | "update" | "create" | "write";

export function allow(...operation: AllowDenyOperatation[]) {
    return function (targetClass: any, propertyKey: string, descriptor: PropertyDescriptor) {
        allowImpl(targetClass, propertyKey, descriptor, operation, false);
    }
}

export function deny(...operation: AllowDenyOperatation[]) {
    return function (targetClass: any, propertyKey: string, descriptor: PropertyDescriptor) {
        allowImpl(targetClass, propertyKey, descriptor, operation, true);
    }
}

function allowImpl(targetClass: any, propertyKey: string, descriptor: PropertyDescriptor, operations: AllowDenyOperatation[], negate?: boolean) {

    const classConstructor: InternalMatchConstructor = targetClass.constructor;

    if (!classConstructor.hasOwnProperty("__rulesMatchAllows") && !classConstructor.__rulesMatchAllows) {
        classConstructor.__rulesMatchAllows = [];
    }

    classConstructor.__rulesMatchAllows.push({
        operations,
        negate,
        body: (thiz) => (descriptor.value as Function).apply(thiz)
    });
}
