import { RulesExpression } from "../core/RulesExpression";
export interface InternalAllowDescriptor {
    operations: string[];
    negate?: boolean;
    body: (thiz: any) => RulesExpression;
}
