export class StringWriter {

    constructor(private readonly indentChars = "    ") {
    }

    private content: string = "";

    private indentLevel = 0;

    write(...values: string[]): this {

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

    line(lineCount: number = 1): this {
        for (let i = 1; i <= lineCount; i++) {
            this.content += "\n";
        }

        for (let i = 1; i <= this.indentLevel; i++) {
            this.content += this.indentChars;
        }

        return this;
    }

    writeLine(...value: string[]): this {
        this.line(1);
        this.write(...value);
        return this;
    }

    indentUp(times: number = 1) {
        this.indentLevel += times;
        return this;
    }

    indentDown(times: number = 1) {
        this.indentLevel -= times;
        return this;
    }

    fixIdent(value: string) {

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
