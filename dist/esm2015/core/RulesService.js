import { StringWriter } from "../utils";
import { RulesExpression } from "./RulesExpression";
export class RulesService {
    constructor(name, version, blocksAndDeclarations) {
        this.name = name;
        this.version = version;
        this.blocksAndDeclarations = blocksAndDeclarations;
    }
    writeMatch(writer, matchConstructor) {
        writer.writeLine("match ", matchConstructor.__rulesMatchPath, " {");
        writer.indentUp();
        writer.line();
        const matchInstance = new matchConstructor();
        for (const func of matchConstructor.__rulesMatchFunctions || []) {
            this.writeFunction(writer, func, matchConstructor, matchInstance);
        }
        for (const allow of matchConstructor.__rulesMatchAllows || []) {
            this.writeAllow(writer, allow, matchConstructor, matchInstance);
        }
        writer.indentDown();
        writer.writeLine("}");
    }
    writeAllow(writer, allow, matchConstructor, matchInstance) {
        writer.writeLine("allow ", allow.operations.join(", "), ": if ");
        this.toExpression(allow.body(matchInstance)).write(writer);
        writer.write(";");
        writer.writeLine();
    }
    writeFunction(writer, func, matchConstructor, matchInstance) {
        writer.writeLine("function ", func.name, "(");
        for (let i = 0; i < (func.args || []).length; i++) {
            if (i > 0) {
                writer.write(", ");
            }
            writer.write(func.args[i]);
        }
        writer.write(") {");
        writer.indentUp();
        writer.line();
        this.toExpression(func.body(matchInstance)).write(writer);
        writer.indentDown();
        writer.writeLine("}");
        writer.writeLine();
    }
    toExpression(value) {
        if (value instanceof RulesExpression) {
            return value;
        }
        else {
            return new RulesExpression(value);
        }
    }
    writeServiceStart(writer) {
    }
    writeServiceEnd(writer) {
    }
    toString() {
        const writer = new StringWriter();
        writer.write("rules_version = '2';").line();
        writer.write(`service ${this.name} {`);
        this.writeServiceStart(writer);
        for (const blockOrDeclaration of this.blocksAndDeclarations || []) {
            if (blockOrDeclaration.__rulesMatchPath && typeof blockOrDeclaration === "function") {
                writer.line();
                writer.indentUp();
                this.writeMatch(writer, blockOrDeclaration);
                writer.indentDown();
            }
            else if (blockOrDeclaration instanceof RulesExpression) {
                writer.indentUp();
                writer.line();
                blockOrDeclaration.write(writer);
                writer.indentDown();
            }
        }
        this.writeServiceEnd(writer);
        writer.writeLine("}");
        return writer.toString();
    }
}
//# sourceMappingURL=RulesService.js.map