"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RulesRequestAuth = void 0;
const RulesValue_1 = require("../core/RulesValue");
const RulesString_1 = require("./RulesString");
class RulesRequestAuth extends RulesValue_1.RulesValue {
    constructor() {
        super();
        this.uid = new RulesString_1.RulesString;
        this.toString = () => "request.auth";
    }
}
exports.RulesRequestAuth = RulesRequestAuth;
//# sourceMappingURL=RulesRequestAuth.js.map