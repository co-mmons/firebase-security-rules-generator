import {StringWriter} from "../utils";

export interface InternalRulesValue {
    __rulesValue: boolean;
    __rulesVarId?: string;
    __rulesAccessorName?: string;
    __rulesAccessorContext?: string | InternalRulesValue;
    __rulesExpression: any;

    __rulesClone();
    __rulesInitProperties();
    __rulesValueAsExpression();
}
