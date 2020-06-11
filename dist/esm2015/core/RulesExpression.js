export class RulesExpression {
    constructor(...expression) {
        this.expression = expression;
    }
    writeImpl(writer, expression) {
        if (expression === null || expression === undefined) {
            return writer.write("null");
        }
        else if (Array.isArray(expression)) {
            for (const e of expression) {
                this.writeImpl(writer, e);
            }
        }
        else if (expression instanceof RulesExpression) {
            return expression.write(writer);
        }
        else if (expression.__rulesValue) {
            return this.writeImpl(writer, expression.__rulesValueAsExpression());
        }
        else if (typeof expression === "string") {
            return writer.write(`"${expression}"`);
        }
        else {
            return writer.write(expression.toString());
        }
    }
    write(writer) {
        this.writeImpl(writer, this.expression);
    }
}
(function (RulesExpression) {
    function l(strings, ...expr) {
        return new class extends RulesExpression {
            write(writer) {
                for (let i = 0; i < strings.length; i++) {
                    writer.write(strings[i] + (expr[i] || ""));
                }
            }
        };
    }
    RulesExpression.l = l;
    function newLine() {
        return new class extends RulesExpression {
            write(writer) {
                writer.line();
            }
        };
    }
    RulesExpression.newLine = newLine;
    function identUp() {
        return new class extends RulesExpression {
            write(writer) {
                writer.indentUp();
            }
        };
    }
    RulesExpression.identUp = identUp;
    function identDown() {
        return new class extends RulesExpression {
            write(writer) {
                writer.indentDown();
            }
        };
    }
    RulesExpression.identDown = identDown;
})(RulesExpression || (RulesExpression = {}));
//# sourceMappingURL=RulesExpression.js.map