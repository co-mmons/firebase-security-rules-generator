import { InternalAllowDescriptor } from "./InternalAllowDescriptor";
import { InternalFunctionDescriptor } from "./InternalFunctionDescriptor";
export interface InternalMatchConstructor {
    new (): any;
    __rulesMatchPath?: string;
    __rulesMatchFunctions?: InternalFunctionDescriptor[];
    __rulesMatchAllows?: InternalAllowDescriptor[];
}
