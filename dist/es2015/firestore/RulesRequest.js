"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RulesRequest = exports.request = void 0;
const RulesExpression_1 = require("../core/RulesExpression");
const RulesValue_1 = require("../core/RulesValue");
const RulesRequestAuth_1 = require("./RulesRequestAuth");
const RulesResource_1 = require("./RulesResource");
function request(resourceData) {
    // @ts-ignore
    return new RulesRequest(resourceData.__rulesClone());
}
exports.request = request;
class RulesRequest extends RulesValue_1.RulesValue {
    constructor(data) {
        super();
        // @ts-ignore
        this.resource = new RulesResource_1.RulesResource(data);
        // @ts-ignore
        this.auth = new RulesRequestAuth_1.RulesRequestAuth();
        this.__rulesInitProperties();
        this.__rulesExpression = RulesExpression_1.RulesExpression.l `request`;
    }
}
exports.RulesRequest = RulesRequest;
//# sourceMappingURL=RulesRequest.js.map