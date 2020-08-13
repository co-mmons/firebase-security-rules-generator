import {RulesExpression} from "../core/RulesExpression";
import {
    concatExpression,
    RulesString as $RulesString,
    sizeExpression,
    substringExpression,
    trimExpression
} from "../core/RulesString";
import {matchesExpression} from "../core/RulesString/matchesExpression";
import {InternalRulesValue} from "../internal";
import {RulesBoolean} from "./RulesBoolean";
import {RulesInteger} from "./RulesInteger";
import {RulesPath} from "./RulesPath";
import {RulesValue} from "./RulesValue";

export class RulesString extends RulesValue implements $RulesString {

    matches(re: RulesString | string): RulesBoolean {
        return new RulesBoolean(matchesExpression(this, re));
    }

    trim(): RulesString {
        return new RulesString(trimExpression(this));
    }

    size(): RulesInteger {
        return new RulesInteger(sizeExpression(this));
    }

    concat(...strings: Array<RulesString | string>): RulesString {
        return new RulesString(concatExpression(this, ...strings));
    }

    substring(start: number, end: number): RulesString {
        return new RulesString(substringExpression(this, start, end));
    }


}

export namespace RulesString {

    export function l(strings: TemplateStringsArray, ...expr: any[]): RulesString {
        return new RulesString(new class extends RulesExpression {
            write(writer) {

                writer.write("\"");

                for (let i = 0; i < strings.length; i++) {
                    writer.write(strings[i]);
                    if (expr.length > i) {
                        if (expr[i] instanceof RulesValue || expr[i] instanceof RulesExpression) {
                            writer.write(`" + `);
                            ((expr[i] instanceof RulesValue ? (expr[i] as InternalRulesValue).__rulesValueAsExpression() : expr[i]) as RulesExpression).write(writer);
                            writer.write(` + "`);
                        } else {
                            writer.write(expr[i] + "");
                        }
                    }
                }

                writer.write("\"");
            }
        });
    }
}