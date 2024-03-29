"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RulesString = void 0;
const RulesExpression_1 = require("../core/RulesExpression");
const RulesString_1 = require("../core/RulesString");
const matchesExpression_1 = require("../core/RulesString/matchesExpression");
const RulesBoolean_1 = require("./RulesBoolean");
const RulesInteger_1 = require("./RulesInteger");
const RulesList_1 = require("./RulesList");
const RulesValue_1 = require("./RulesValue");
class RulesString extends RulesValue_1.RulesValue {
    static is(value) {
        return new RulesBoolean_1.RulesBoolean(new RulesExpression_1.RulesExpression(value, RulesExpression_1.RulesExpression.l ` is string`));
    }
    split(re) {
        return new RulesList_1.RulesList((0, RulesString_1.splitExpression)(this, re));
    }
    matches(re) {
        return new RulesBoolean_1.RulesBoolean((0, matchesExpression_1.matchesExpression)(this, re));
    }
    trim() {
        return new RulesString((0, RulesString_1.trimExpression)(this));
    }
    size() {
        return new RulesInteger_1.RulesInteger((0, RulesString_1.sizeExpression)(this));
    }
    concat(...strings) {
        return new RulesString((0, RulesString_1.concatExpression)(this, ...strings));
    }
    substring(start, end) {
        return new RulesString((0, RulesString_1.substringExpression)(this, start, end));
    }
}
exports.RulesString = RulesString;
(function (RulesString) {
    function l(strings, ...expr) {
        return new RulesString(new class extends RulesExpression_1.RulesExpression {
            write(writer) {
                writer.write("\"");
                for (let i = 0; i < strings.length; i++) {
                    writer.write(strings[i]);
                    if (expr.length > i) {
                        if (expr[i] instanceof RulesValue_1.RulesValue || expr[i] instanceof RulesExpression_1.RulesExpression) {
                            writer.write(`" + `);
                            (expr[i] instanceof RulesValue_1.RulesValue ? expr[i].__rulesValueAsExpression() : expr[i]).write(writer);
                            writer.write(` + "`);
                        }
                        else {
                            writer.write(expr[i] + "");
                        }
                    }
                }
                writer.write("\"");
            }
        });
    }
    RulesString.l = l;
})(RulesString = exports.RulesString || (exports.RulesString = {}));
//# sourceMappingURL=RulesString.js.map