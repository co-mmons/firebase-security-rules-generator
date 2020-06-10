export abstract class RulesType {

    constructor() {
    }

    private __rulesAccessorName: string;

    private __rulesAccessContextAsString(context: string | RulesType) {
        if (typeof context === "string") {
            return context;
        } else {
            return "dupa";
        }
    }

    toExpression(context: string | RulesType) {
        return `${this.__rulesAccessContextAsString(context)}.${this.__rulesAccessorName}`;
    }
}
