import { RulesExpression } from "../core/RulesExpression";
export interface InternalAllowDescriptor {
    operations: string[];
    body: (thiz: any) => RulesExpression;
}
