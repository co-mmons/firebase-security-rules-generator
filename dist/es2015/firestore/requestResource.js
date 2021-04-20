"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestResource = void 0;
const request_1 = require("./request");
function requestResource(resourceData) {
    return request_1.request(resourceData).resource;
}
exports.requestResource = requestResource;
//# sourceMappingURL=requestResource.js.map