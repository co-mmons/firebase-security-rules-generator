"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ifElse = void 0;
const RulesExpression_1 = require("../core/RulesExpression");
const RulesBoolean_1 = require("./RulesBoolean");
const RulesString_1 = require("./RulesString");
function ifElse(trueExpression, whenTrueValue, elseValue = null) {
    if (typeof whenTrueValue === "string") {
        whenTrueValue = new RulesString_1.RulesString(new RulesExpression_1.RulesExpression(whenTrueValue));
    }
    else if (typeof whenTrueValue === "boolean") {
        whenTrueValue = new RulesBoolean_1.RulesBoolean(new RulesExpression_1.RulesExpression(whenTrueValue));
    }
    if (typeof elseValue === "string") {
        elseValue = new RulesString_1.RulesString(new RulesExpression_1.RulesExpression(elseValue));
    }
    else if (typeof elseValue === "boolean") {
        elseValue = new RulesBoolean_1.RulesBoolean(new RulesExpression_1.RulesExpression(elseValue));
    }
    return new RulesExpression_1.RulesExpression(RulesExpression_1.RulesExpression.l `(`, trueExpression, RulesExpression_1.RulesExpression.l `) ? (`, whenTrueValue, RulesExpression_1.RulesExpression.l `) : (`, elseValue || RulesExpression_1.RulesExpression.l `null`, RulesExpression_1.RulesExpression.l `)`);
}
exports.ifElse = ifElse;
//# sourceMappingURL=ifElse.js.map