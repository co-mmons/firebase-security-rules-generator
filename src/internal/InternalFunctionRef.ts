export interface InternalFunctionRef {
    name: string;
    args: string[];
    call: (thiz: any) => any;
}
