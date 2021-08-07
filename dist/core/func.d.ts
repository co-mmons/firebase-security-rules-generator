import "reflect-metadata";
/**
 * A function within match block.
 */
export declare function func(options?: {
    exportedName?: string;
}): (targetClass: any, functionName: string, descriptor: PropertyDescriptor) => void;
