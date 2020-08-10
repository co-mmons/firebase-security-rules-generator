import { RulesExpression } from "../core/RulesExpression";
import { RulesValue } from "./RulesValue";
/**
 * Directory-like pattern for the location of a resource.
 *
 * {@link https://firebase.google.com/docs/reference/rules/rules.Path}
 */
export class RulesPath extends RulesValue {
    bind(map) {
        return new RulesPath(new RulesExpression(RulesExpression.l `(`, this, RulesExpression.l `).bind(`, map, RulesExpression.l `)`));
    }
}
export function path(path) {
    return new RulesPath(new RulesExpression(RulesExpression.l `path(`, path, RulesExpression.l `)`));
}
(function (RulesPath) {
    function value(stringPath) {
        return path(stringPath);
    }
    RulesPath.value = value;
    function l(strings, ...expr) {
        return new RulesPath(new class extends RulesExpression {
            write(writer) {
                writer.write("path(\"/databases/$(database)/documents");
                for (let i = 0; i < strings.length; i++) {
                    writer.write(strings[i]);
                    if (expr.length > i) {
                        if (expr[i] instanceof RulesValue || expr[i] instanceof RulesExpression) {
                            writer.write(`" + `);
                            (expr[i] instanceof RulesValue ? expr[i].__rulesValueAsExpression() : expr[i]).write(writer);
                            writer.write(` + "`);
                        }
                        else {
                            writer.write(expr[i] || "");
                        }
                    }
                }
                writer.write("\")");
            }
        });
    }
    RulesPath.l = l;
})(RulesPath || (RulesPath = {}));
//# sourceMappingURL=RulesPath.js.map