"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RulesRequestAuth = exports.auth = void 0;
const RulesExpression_1 = require("../core/RulesExpression");
const RulesMap_1 = require("./RulesMap");
const RulesValue_1 = require("./RulesValue");
const RulesString_1 = require("./RulesString");
function auth() {
    // @ts-ignore
    const auth = new RulesRequestAuth();
    auth.__rulesInitProperties();
    return auth;
}
exports.auth = auth;
class RulesRequestAuth extends RulesValue_1.RulesValue {
    constructor() {
        super();
        this.uid = new RulesString_1.RulesString;
        /**
         * A map of JWT token claims.
         * @see https://firebase.google.com/docs/reference/rules/rules.firestore.Request#auth
         */
        this.token = new RulesMap_1.RulesMap;
        this.__rulesExpression = RulesExpression_1.RulesExpression.l `request.auth`;
    }
}
exports.RulesRequestAuth = RulesRequestAuth;
//# sourceMappingURL=RulesRequestAuth.js.map