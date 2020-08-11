"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.request = void 0;
const RulesExpression_1 = require("../core/RulesExpression");
const RulesMap_1 = require("./RulesMap");
const RulesRequestAuth_1 = require("./RulesRequestAuth");
const RulesResource_1 = require("./RulesResource");
const RulesString_1 = require("./RulesString");
const RulesTimestamp_1 = require("./RulesTimestamp");
const RulesValue_1 = require("./RulesValue");
function request(resourceData) {
    if (!resourceData) {
        resourceData = new RulesMap_1.RulesMap();
    }
    // @ts-ignore
    return new RulesRequestImpl(resourceData.__rulesClone());
}
exports.request = request;
class RulesRequestImpl extends RulesValue_1.RulesValue {
    constructor(data) {
        super();
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
        this.resource = new RulesResource_1.RulesResource(data);
        this.__rulesInitProperties();
        this.__rulesExpression = RulesExpression_1.RulesExpression.l `request`;
    }
}
//# sourceMappingURL=RulesRequest.js.map