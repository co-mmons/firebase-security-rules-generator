import {StringWriter} from "@co.mmons/firebase-security-rules/utils";

export class Expression {

    constructor(...expression: any[]) {
        this.expression = expression;
    }

    private expression: any[];

    private asString(v: any) {
        if (v === null) {
            return "null";
        } else if (v === undefined) {
            return "null";
        } else {
            return v.toString();
        }
    }

    toString() {
        const writer = new StringWriter();

        for (const expr of this.expression || []) {
            writer.write(this.asString(expr));
        }

        return writer.toString();
    }

}
