import { RulesExpression } from "../core/RulesExpression";
import { RulesValue } from "./RulesValue";
import { RulesRequestAuth } from "./RulesRequestAuth";
import { RulesResource } from "./RulesResource";
import { RulesString } from "./RulesString";
import { RulesTimestamp } from "./RulesTimestamp";
export function request(resourceData) {
    // @ts-ignore
    return new RulesRequestImpl(resourceData.__rulesClone());
}
class RulesRequestImpl extends RulesValue {
    constructor(data) {
        super();
        // @ts-ignore
        this.auth = new RulesRequestAuth;
        this.time = new RulesTimestamp;
        /**
         * The request method. One of:
         * - get
         * - list
         * - create
         * - update
         * - delete
         *
         * @see https://firebase.google.com/docs/reference/rules/rules.firestore.Request#method
         */
        this.method = new RulesString;
        this.resource = new RulesResource(data);
        this.__rulesInitProperties();
        this.__rulesExpression = RulesExpression.l `request`;
    }
}
//# sourceMappingURL=RulesRequest.js.map