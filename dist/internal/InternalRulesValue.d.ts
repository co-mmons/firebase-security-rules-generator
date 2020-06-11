export interface InternalRulesValue {
    __rulesValue: boolean;
    __rulesAccessorName?: string;
    __rulesAccessorContext?: string | InternalRulesValue;
    __rulesExpression: any;
    __rulesClone(): any;
    __rulesInitProperties(): any;
    __rulesValueAsExpression(): any;
}
