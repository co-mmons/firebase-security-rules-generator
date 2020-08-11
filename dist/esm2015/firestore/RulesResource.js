import { RulesExpression } from "../core/RulesExpression";
import { RulesValue } from "./RulesValue";
import { RulesMap } from "./RulesMap";
import { RulesPath } from "./RulesPath";
import { RulesString } from "./RulesString";
export class RulesResource extends RulesValue {
    constructor($data = new RulesMap) {
        super();
        this.$data = $data;
        this.id = new RulesString;
        this.__name__ = new RulesPath;
    }
    data(dataType) {
        this.$data.__rulesAccessorName = "data";
        if (!dataType) {
            return this.$data;
        }
        else {
            const data = new dataType();
            data.__rulesExpression = new RulesExpression(this, RulesExpression.l `.data`);
            return data;
        }
    }
}
//# sourceMappingURL=RulesResource.js.map