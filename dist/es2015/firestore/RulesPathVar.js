"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RulesPathVar = void 0;
const RulesExpression_1 = require("../core/RulesExpression");
const RulesString_1 = require("./RulesString");
class RulesPathVar extends RulesString_1.RulesString {
    constructor(varName) {
        super();
        this.__rulesPathVar = true;
        if (varName) {
            this.__rulesAccessorName = varName;
        }
        this.__rulesValueAsExpression = () => RulesExpression_1.RulesExpression.l `${this.__rulesAccessorName}`;
    }
}
exports.RulesPathVar = RulesPathVar;
//# sourceMappingURL=RulesPathVar.js.map