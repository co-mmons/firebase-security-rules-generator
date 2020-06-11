import { RulesValue } from "../core/RulesValue";
import { RulesString } from "./RulesString";
export class RulesRequestAuth extends RulesValue {
    constructor() {
        super();
        this.uid = new RulesString;
        this.toString = () => "request.auth";
    }
}
//# sourceMappingURL=RulesRequestAuth.js.map