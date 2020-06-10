export abstract class RulesType {
    private __rulesAccessorName: string;
    private __rulesAccessorContext: string;

    toString() {
        return `${this.__rulesAccessorContext}.${this.__rulesAccessorName}`;
    }
}
