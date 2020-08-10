import "reflect-metadata";
export declare function func(options?: {
    exportedName?: string;
}): (targetClass: any, functionName: string, descriptor: PropertyDescriptor) => void;
