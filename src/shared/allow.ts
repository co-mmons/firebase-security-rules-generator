import {InternalMatchTypeConstructor} from "../internal";

export type AllowOperatation = "get" | "list" | "query" | "read" | "delete" | "update" | "create" | "write";

export function allow(...operation: AllowOperatation[]) {
    return function (target: any & InternalMatchTypeConstructor, propertyKey: string, descriptor: PropertyDescriptor) {
    }
}
