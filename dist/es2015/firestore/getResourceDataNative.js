"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getResourceDataNative = void 0;
const RulesExpression_1 = require("../core/RulesExpression");
exports.getResourceDataNative = RulesExpression_1.RulesExpression.l `function __getResourceData(resource) {
    return resource != null ? resource.data : null;
}`;
//# sourceMappingURL=getResourceDataNative.js.map