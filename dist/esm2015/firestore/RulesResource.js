import { RulesExpression } from "../core/RulesExpression";
import { RulesValue } from "./RulesValue";
import { RulesMap } from "./RulesMap";
import { RulesPath } from "./RulesPath";
import { RulesString } from "./RulesString";
export class RulesResourceKnownData extends RulesValue {
    constructor(data) {
        super();
        this.id = new RulesString;
        this.__name__ = new RulesPath;
        this.$data = data.__rulesClone();
        this.$data.__rulesAccessorName = "data";
        this.$data.__rulesExpression = new RulesExpression(this, RulesExpression.l `.data`);
    }
    data() {
        return this.$data;
    }
}
export class RulesResourceUnknownData extends RulesValue {
    constructor() {
        super();
        this.id = new RulesString;
        this.__name__ = new RulesPath;
    }
    data(dataType) {
        const data = dataType ? new dataType() : new RulesMap;
        data.__rulesAccessorName = "data";
        data.__rulesExpression = new RulesExpression(this, RulesExpression.l `.data`);
        data.__rulesInitProperties();
        return data;
    }
}
//# sourceMappingURL=RulesResource.js.map