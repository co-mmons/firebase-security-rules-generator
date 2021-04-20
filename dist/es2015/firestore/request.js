"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.request = void 0;
const RulesRequest_1 = require("./RulesRequest");
const RulesResource_1 = require("./RulesResource");
function request(resourceData) {
    let resource;
    if (resourceData) {
        resource = new RulesResource_1.RulesResourceKnownData(resourceData);
    }
    else {
        resource = new RulesResource_1.RulesResourceUnknownData();
    }
    return new RulesRequest_1.RulesRequestImpl(resource);
}
exports.request = request;
//# sourceMappingURL=request.js.map