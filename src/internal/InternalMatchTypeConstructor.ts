import {InternalFunctionRef} from "./InternalFunctionRef";

export interface InternalMatchTypeConstructor {
    new(): any;
    __rulesMatchPath?: string;
    __rulesMatchFunctions?: InternalFunctionRef[];
    __rulesMatchAllows?: any[];
}
