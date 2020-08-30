import {RulesExpression} from "../core/RulesExpression";
import {InternalRulesValue} from "../internal";
import {RulesMap} from "./RulesMap";
import {RulesValue} from "./RulesValue";

/**
 * Directory-like pattern for the location of a resource.
 *
 * {@link https://firebase.google.com/docs/reference/rules/rules.Path}
 */
export class RulesPath extends RulesValue {

    bind(map: RulesMap | {[key: string]: any}) {
        return new RulesPath(new RulesExpression(RulesExpression.l`(`, this, RulesExpression.l`).bind(`, map, RulesExpression.l`)`));
    }

}

export function path(path: string) {
    return new RulesPath(new RulesExpression(RulesExpression.l`path(`, path, RulesExpression.l`)`));
}

export namespace RulesPath {

    export function value(stringPath: string) {
        return path(stringPath);
    }

    export function l(strings: TemplateStringsArray, ...expr: any[]): RulesPath {
        return new RulesPath(new class extends RulesExpression {
            write(writer) {

                writer.write("/databases/$(database)/documents");

                let braceOpened = false;

                for (let i = 0; i < strings.length; i++) {

                    if (strings[i].includes("/") && braceOpened) {
                        writer.write("\")");
                        braceOpened = false;
                    }

                    writer.write(strings[i]);
                    if (expr.length > i) {

                        if (!braceOpened) {
                            writer.write("$(\"");
                            braceOpened = true;
                        }

                        if (expr[i] instanceof RulesValue || expr[i] instanceof RulesExpression) {
                            writer.write(`" + `);
                            ((expr[i] instanceof RulesValue ? (expr[i] as InternalRulesValue).__rulesValueAsExpression() : expr[i]) as RulesExpression).write(writer);
                            writer.write(` + "`);
                        } else {
                            writer.write(expr[i] || "");
                        }
                    }
                }

                if (braceOpened) {
                    writer.write("\")");
                }
            }
        });
    }
}
