import { RulesExpression } from "../core/RulesExpression";
import { concatExpression, sizeExpression, substringExpression, trimExpression } from "../core/RulesString";
import { matchesExpression } from "../core/RulesString/matchesExpression";
import { RulesBoolean } from "./RulesBoolean";
import { RulesInteger } from "./RulesInteger";
import { RulesValue } from "./RulesValue";
export class RulesString extends RulesValue {
    static is(value) {
        return new RulesBoolean(new RulesExpression(value, RulesExpression.l ` is string`));
    }
    matches(re) {
        return new RulesBoolean(matchesExpression(this, re));
    }
    trim() {
        return new RulesString(trimExpression(this));
    }
    size() {
        return new RulesInteger(sizeExpression(this));
    }
    concat(...strings) {
        return new RulesString(concatExpression(this, ...strings));
    }
    substring(start, end) {
        return new RulesString(substringExpression(this, start, end));
    }
}
(function (RulesString) {
    function l(strings, ...expr) {
        return new RulesString(new class extends RulesExpression {
            write(writer) {
                writer.write("\"");
                for (let i = 0; i < strings.length; i++) {
                    writer.write(strings[i]);
                    if (expr.length > i) {
                        if (expr[i] instanceof RulesValue || expr[i] instanceof RulesExpression) {
                            writer.write(`" + `);
                            (expr[i] instanceof RulesValue ? expr[i].__rulesValueAsExpression() : expr[i]).write(writer);
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
})(RulesString || (RulesString = {}));
//# sourceMappingURL=RulesString.js.map