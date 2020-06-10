import {StringWriter} from "@co.mmons/firebase-security-rules/utils";
import exp from "constants";
import {RulesType} from "./RulesType";

export class Expression {

    constructor(...expression: any[]) {
        this.expression = expression;
    }

    private expression: any[];

    protected asString(context: string | RulesType, exp: any) {

        if (exp === null) {
            return "null";

        } else if (exp === undefined) {
            return "null";

        } else if (Array.isArray(exp)) {
            return exp.map(e => this.asString(context, e)).join("");

        } else if (exp instanceof Expression) {
            return exp.execute(context);

        } else if (exp instanceof RulesType) {
            return exp.toExpression(context);

        } else if (typeof exp === "string") {
            return `"${exp}"`;

        } else {
            return exp.toString();
        }
    }

    execute(context: string | RulesType) {
        const writer = new StringWriter();

        for (const e of this.expression || []) {
            writer.write(this.asString(context, e));
        }

        return writer.toString();
    }

}

export namespace Expression {

    export function l(strings: TemplateStringsArray, ...expr: string[]): Expression {
        return new class extends Expression {
            execute(context: string | RulesType): string {
                let str = "";
                for (let i = 0; i < strings.length; i++) {
                    str += strings[i] + (expr[i] || "");
                }
                return str;
            }
        }
    }

}
