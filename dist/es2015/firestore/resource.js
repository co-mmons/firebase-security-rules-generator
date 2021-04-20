"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resource = void 0;
const RulesExpression_1 = require("../core/RulesExpression");
const RulesResource_1 = require("./RulesResource");
function resource(data) {
    const resource = data ? new RulesResource_1.RulesResourceKnownData(data) : new RulesResource_1.RulesResourceUnknownData();
    resource.__rulesExpression = RulesExpression_1.RulesExpression.l `resource`;
    return resource;
}
exports.resource = resource;
//# sourceMappingURL=resource.js.map