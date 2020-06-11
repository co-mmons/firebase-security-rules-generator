import { RulesValue } from "../core/RulesValue";
import { RulesRequestAuth } from "./RulesRequestAuth";
import { RulesResource } from "./RulesResource";
export function request(resourceData) {
    // @ts-ignore
    return new RulesRequest(resourceData.__rulesClone());
}
export class RulesRequest extends RulesValue {
    constructor(data) {
        super();
        // @ts-ignore
        this.resource = new RulesResource(data);
        // @ts-ignore
        this.auth = new RulesRequestAuth();
        this.__rulesInitProperties();
        this.toString = () => "request";
    }
}
//# sourceMappingURL=RulesRequest.js.map