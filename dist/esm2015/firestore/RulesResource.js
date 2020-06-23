import { RulesValue } from "../core/RulesValue";
import { RulesMap } from "./RulesMap";
import { RulesPath } from "./RulesPath";
import { RulesString } from "./RulesString";
export class RulesResource extends RulesValue {
    constructor(data = new RulesMap) {
        super();
        this.data = data;
        this.id = new RulesString;
        this.__name__ = new RulesPath;
    }
}
//# sourceMappingURL=RulesResource.js.map