"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.whenTrue = void 0;
const ifElse_1 = require("./ifElse");
function whenTrue(trueExpression, whenTrueValue) {
    return ifElse_1.ifElse(trueExpression, whenTrueValue, "null");
}
exports.whenTrue = whenTrue;
//# sourceMappingURL=whenTrue.js.map