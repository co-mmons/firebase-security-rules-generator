import { RulesExpression } from "../core/RulesExpression";
import { RulesValue } from "../core/RulesValue";
import { RulesRequestAuth } from "./RulesRequestAuth";
import { RulesResource } from "./RulesResource";
export function request(resourceData) {
    // @ts-ignore
    return new RulesRequestImpl(resourceData.__rulesClone());
}
class RulesRequestImpl extends RulesValue {
    constructor(data) {
        super();
        this.resource = new RulesResource(data);
        // @ts-ignore
        this.auth = new RulesRequestAuth();
        this.__rulesInitProperties();
        this.__rulesExpression = RulesExpression.l `request`;
    }
}
//# sourceMappingURL=RulesRequest.js.map