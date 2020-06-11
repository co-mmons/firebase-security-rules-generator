"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.firestore = void 0;
const RulesService_1 = require("../core/RulesService");
function firestore(...resourceOrFunction) {
    return new RulesService_1.RulesService("cloud.firestore", 2, resourceOrFunction);
}
exports.firestore = firestore;
//# sourceMappingURL=firestore.js.map