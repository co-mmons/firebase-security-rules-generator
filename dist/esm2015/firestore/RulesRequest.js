import { RulesExpression } from "../core/RulesExpression";
import { RulesRequestAuth } from "./RulesRequestAuth";
import { RulesString } from "./RulesString";
import { RulesTimestamp } from "./RulesTimestamp";
import { RulesValue } from "./RulesValue";
export class RulesRequestImpl extends RulesValue {
    constructor(resource) {
        super();
        this.resource = resource;
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
        this.__rulesInitProperties();
        this.__rulesExpression = RulesExpression.l `request`;
    }
}
//# sourceMappingURL=RulesRequest.js.map