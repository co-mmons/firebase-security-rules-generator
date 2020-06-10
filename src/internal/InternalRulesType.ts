export interface InternalRulesType {
    __rulesAccessorName?: string;
    __rulesAccessorContext?: string | InternalRulesType;

    __rulesApplyContext();
}
