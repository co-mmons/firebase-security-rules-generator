export abstract class RulesValue {

    constructor() {
        this.toString = () => `${this.__rulesAccessContextAsString()}${this.__rulesAccessorName}`;
    }

    private __rulesAccessorName: string;
    private __rulesAccessorContext: string | RulesValue;

    private __rulesAccessContextAsString() {
        if (typeof this.__rulesAccessorContext === "string") {
            return this.__rulesAccessorContext + ".";
        } else if (this.__rulesAccessorContext) {
            return this.__rulesAccessorContext.toString() + ".";
        } else {
            return "";
        }
    }

    private __rulesInitProperties() {

        for (const propertyName in this) {

            const propertyValue = this[propertyName];

            if (propertyValue instanceof RulesValue && !propertyName.startsWith("__rules")) {
                propertyValue.__rulesAccessorName = propertyName;
                propertyValue.__rulesAccessorContext = this;
                propertyValue.__rulesInitProperties();
            }
        }

    }

    private __rulesClone() {
        const niu = new (this["constructor"] as any as {new(): RulesValue});
        niu.__rulesInitProperties();
        return niu;
    }
}
