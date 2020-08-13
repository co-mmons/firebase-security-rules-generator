import { RulesExpression } from "../core/RulesExpression";
import { RulesMap } from "./RulesMap";
import { RulesValue } from "./RulesValue";
import { RulesString } from "./RulesString";
export function auth() {
    // @ts-ignore
    const auth = new RulesRequestAuth();
    auth.__rulesInitProperties();
    return auth;
}
export class RulesRequestAuth extends RulesValue {
    constructor() {
        super();
        this.uid = new RulesString;
        /**
         * A map of JWT token claims.
         * @see https://firebase.google.com/docs/reference/rules/rules.firestore.Request#auth
         */
        this.token = new RulesMap;
        this.__rulesExpression = RulesExpression.l `request.auth`;
    }
}
//# sourceMappingURL=RulesRequestAuth.js.map