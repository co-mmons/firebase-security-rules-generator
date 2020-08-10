import {type} from "os";
import {InternalRulesValue} from "../internal";
import {StringWriter} from "../utils";

export class RulesExpression {

    constructor(...expression: any[]) {
        this.expression = expression;
    }

    protected expression: any[];

    protected writeImpl(writer: StringWriter, expression: any) {

        if (expression === null || expression === undefined) {
            return writer.write("null");

        } else if (Array.isArray(expression)) {

            for (const e of expression) {
                this.writeImpl(writer, e);
            }

        } else if (expression instanceof RulesExpression) {
            return expression.write(writer);

        } else if ((expression as any as InternalRulesValue).__rulesValue ) {
            return this.writeImpl(writer, (expression as any as InternalRulesValue).__rulesValueAsExpression());

        } else if (typeof expression === "string") {
            return writer.write(`"${expression}"`);

        } else {
            return writer.write(expression.toString());
        }
    }

    write(writer: StringWriter) {
        this.writeImpl(writer, this.expression);
    }

}

export namespace RulesExpression {

    export function l(strings: TemplateStringsArray, ...expr: string[]): RulesExpression {
        return new class extends RulesExpression {
            write(writer) {
                for (let i = 0; i < strings.length; i++) {
                    writer.write(strings[i] + (expr[i] || ""));
                }
            }
        }
    }

    export function newLine(): RulesExpression {
        return new class extends RulesExpression {
            write(writer: StringWriter) {
                writer.line();
            }
        }
    }

    export function identUp(): RulesExpression {
        return new class extends RulesExpression {
            write(writer: StringWriter) {
                writer.indentUp();
            }
        }
    }

    export function identDown(): RulesExpression {
        return new class extends RulesExpression {
            write(writer: StringWriter) {
                writer.indentDown();
            }
        }
    }
}
