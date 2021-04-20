"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.request = void 0;
const RulesMap_1 = require("./RulesMap");
const RulesRequest_1 = require("./RulesRequest");
function request(resourceData) {
    if (!resourceData) {
        resourceData = new RulesMap_1.RulesMap();
    }
    // @ts-ignore
    return new RulesRequest_1.RulesRequestImpl(resourceData.__rulesClone());
}
exports.request = request;
//# sourceMappingURL=request.js.map