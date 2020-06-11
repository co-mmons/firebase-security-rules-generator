export interface InternalRulesValue {
    __rulesAccessorName?: string;
    __rulesAccessorContext?: string | InternalRulesValue;

    __rulesClone();
    __rulesInitProperties();
}
