import {Expression} from "../shared/Expression";

export interface InternalFunctionRef {
    name: string;
    args: string[];
    call: (thiz: any) => Expression;
}
