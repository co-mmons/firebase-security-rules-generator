"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestData = void 0;
const request_1 = require("./request");
function requestData(resourceData) {
    if (resourceData) {
        return (0, request_1.request)(resourceData).resource.data();
    }
    else {
        return (0, request_1.request)().resource.data();
    }
}
exports.requestData = requestData;
//# sourceMappingURL=requestData.js.map