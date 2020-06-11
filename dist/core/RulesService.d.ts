import { InternalAllowDescriptor, InternalFunctionDescriptor, InternalMatchConstructor } from "../internal";
import { StringWriter } from "../utils";
export declare class RulesService {
    protected readonly name: "firebase.storage" | "cloud.firestore";
    protected readonly version: 1 | 2;
    protected readonly blocksAndDeclarations: Array<any & InternalMatchConstructor>;
    constructor(name: "firebase.storage" | "cloud.firestore", version: 1 | 2, blocksAndDeclarations: Array<any & InternalMatchConstructor>);
    protected writeMatch(writer: StringWriter, matchConstructor: InternalMatchConstructor): void;
    protected writeAllow(writer: StringWriter, allow: InternalAllowDescriptor, matchConstructor?: InternalMatchConstructor, matchInstance?: any): void;
    protected writeFunction(writer: StringWriter, func: InternalFunctionDescriptor, matchConstructor?: InternalMatchConstructor, matchInstance?: any): void;
    toString(): string;
}
