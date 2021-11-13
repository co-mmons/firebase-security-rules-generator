export declare type AllowDenyOperation = "get" | "list" | "read" | "delete" | "update" | "create" | "write";
export declare function allow(...operation: AllowDenyOperation[]): (targetClass: any, propertyKey: string, descriptor: PropertyDescriptor) => void;
export declare function deny(...operation: AllowDenyOperation[]): (targetClass: any, propertyKey: string, descriptor: PropertyDescriptor) => void;
