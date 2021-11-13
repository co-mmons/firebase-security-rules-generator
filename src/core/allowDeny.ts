import {InternalMatchConstructor} from "../internal";

export type AllowDenyOperation = "get" | "list" | "read" | "delete" | "update" | "create" | "write";

export function allow(...operation: AllowDenyOperation[]) {
    return function (targetClass: any, propertyKey: string, descriptor: PropertyDescriptor) {
        allowImpl(targetClass, propertyKey, descriptor, operation, false);
    }
}

export function deny(...operation: AllowDenyOperation[]) {
    return function (targetClass: any, propertyKey: string, descriptor: PropertyDescriptor) {
        allowImpl(targetClass, propertyKey, descriptor, operation, true);
    }
}

function allowImpl(targetClass: any, propertyKey: string, descriptor: PropertyDescriptor, operations: AllowDenyOperation[], negate?: boolean) {

    const classConstructor: InternalMatchConstructor = targetClass.constructor;
    const originalFunction: Function = descriptor.value;

    if (!classConstructor.hasOwnProperty("__rulesMatchAllows") && !classConstructor.__rulesMatchAllows) {
        classConstructor.__rulesMatchAllows = [];
    }

    classConstructor.__rulesMatchAllows.push({
        operations,
        negate,
        body: (thiz) => originalFunction.apply(thiz)
    });
}
