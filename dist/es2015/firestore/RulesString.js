"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RulesString = void 0;
const RulesExpression_1 = require("../core/RulesExpression");
const RulesString_1 = require("../core/RulesString");
const matchesExpression_1 = require("../core/RulesString/matchesExpression");
const RulesBoolean_1 = require("./RulesBoolean");
const RulesInteger_1 = require("./RulesInteger");
const RulesValue_1 = require("./RulesValue");
class RulesString extends RulesValue_1.RulesValue {
    matches(re) {
        return new RulesBoolean_1.RulesBoolean(matchesExpression_1.matchesExpression(this, re));
    }
    trim() {
        return new RulesString(RulesString_1.trimExpression(this));
    }
    size() {
        return new RulesInteger_1.RulesInteger(RulesString_1.sizeExpression(this));
    }
    concat(...strings) {
        return new RulesString(RulesString_1.concatExpression(this, ...strings));
    }
    substring(start, end) {
        return new RulesString(RulesString_1.substringExpression(this, start, end));
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