"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RulesRequestImpl = void 0;
const RulesExpression_1 = require("../core/RulesExpression");
const RulesRequestAuth_1 = require("./RulesRequestAuth");
const RulesString_1 = require("./RulesString");
const RulesTimestamp_1 = require("./RulesTimestamp");
const RulesValue_1 = require("./RulesValue");
class RulesRequestImpl extends RulesValue_1.RulesValue {
    constructor(resource) {
        super();
        this.resource = resource;
        // @ts-ignore
        this.auth = new RulesRequestAuth_1.RulesRequestAuth;
        this.time = new RulesTimestamp_1.RulesTimestamp;
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
        this.method = new RulesString_1.RulesString;
        this.__rulesInitProperties();
        this.__rulesExpression = RulesExpression_1.RulesExpression.l `request`;
    }
}
exports.RulesRequestImpl = RulesRequestImpl;
//# sourceMappingURL=RulesRequest.js.map