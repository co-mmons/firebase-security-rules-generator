export class StringWriter {
    constructor(indentChars = "    ") {
        this.indentChars = indentChars;
        this.content = "";
        this.indentLevel = 0;
    }
    write(...values) {
        for (const value of values) {
            const lines = (value ? value : "").split("\n");
            for (let i = 0; i < lines.length; i++) {
                if (i > 0) {
                    this.line();
                }
                this.content += lines[i] || "";
            }
        }
        return this;
    }
    line(lineCount = 1) {
        for (let i = 1; i <= lineCount; i++) {
            this.content += "\n";
        }
        for (let i = 1; i <= this.indentLevel; i++) {
            this.content += this.indentChars;
        }
        return this;
    }
    writeLine(...value) {
        this.line(1);
        this.write(...value);
        return this;
    }
    indentUp(times = 1) {
        this.indentLevel += times;
        return this;
    }
    indentDown(times = 1) {
        this.indentLevel -= times;
        return this;
    }
    fixIdent(value) {
        let current = "";
        for (let i = 1; i <= this.indentLevel; i++) {
            current += this.indentChars;
        }
        return value.replace(new RegExp(`^${this.indentChars}`, "mg"), current);
    }
    toString() {
        return this.content;
    }
}
//# sourceMappingURL=StringWriter.js.map