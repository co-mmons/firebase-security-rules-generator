export declare type AllowDenyOperatation = "get" | "list" | "query" | "read" | "delete" | "update" | "create" | "write";
export declare function allow(...operation: AllowDenyOperatation[]): (targetClass: any, propertyKey: string, descriptor: PropertyDescriptor) => void;
export declare function deny(...operation: AllowDenyOperatation[]): (targetClass: any, propertyKey: string, descriptor: PropertyDescriptor) => void;
