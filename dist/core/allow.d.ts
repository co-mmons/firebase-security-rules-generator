export declare type AllowOperatation = "get" | "list" | "query" | "read" | "delete" | "update" | "create" | "write";
export declare function allow(...operation: AllowOperatation[]): (targetClass: any, propertyKey: string, descriptor: PropertyDescriptor) => void;
