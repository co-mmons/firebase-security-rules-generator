"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.firestore = void 0;
var RulesService_1 = require("../core/RulesService");
function firestore() {
    var resourceOrFunction = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        resourceOrFunction[_i] = arguments[_i];
    }
    return new RulesService_1.RulesService("cloud.firestore", 2, resourceOrFunction);
}
exports.firestore = firestore;
//# sourceMappingURL=firestore.js.map