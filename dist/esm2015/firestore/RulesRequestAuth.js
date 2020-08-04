import { RulesExpression } from "../core/RulesExpression";
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
        this.__rulesExpression = RulesExpression.l `request.auth`;
    }
}
//# sourceMappingURL=RulesRequestAuth.js.map