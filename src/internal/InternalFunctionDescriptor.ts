import {RulesExpression} from "../core/RulesExpression";

export interface InternalFunctionDescriptor {
    name: string;
    args: string[];
    body: (thiz: any) => RulesExpression;
}
