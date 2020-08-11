export interface InternalFunctionDescriptor {
    name: string;
    args: string[];
    body: (thiz: any) => {
        vars: {
            [varName: string]: any;
        };
        result: any;
    };
    global: boolean;
}
