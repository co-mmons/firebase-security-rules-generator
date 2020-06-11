export declare class StringWriter {
    private readonly indentChars;
    constructor(indentChars?: string);
    private content;
    private indentLevel;
    write(...values: string[]): this;
    line(lineCount?: number): this;
    writeLine(...value: string[]): this;
    indentUp(times?: number): this;
    indentDown(times?: number): this;
    fixIdent(value: string): string;
    toString(): string;
}
