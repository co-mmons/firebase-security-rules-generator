"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RulesService = void 0;
const utils_1 = require("../utils");
class RulesService {
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
        allow.body(matchInstance).write(writer);
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
        func.body(matchInstance).write(writer);
        writer.indentDown();
        writer.writeLine("}");
        writer.writeLine();
    }
    toString() {
        const writer = new utils_1.StringWriter();
        writer.write(`service ${this.name} {`);
        for (const blockOrDeclaration of this.blocksAndDeclarations || []) {
            if (blockOrDeclaration.__rulesMatchPath && typeof blockOrDeclaration === "function") {
                writer.line();
                writer.indentUp();
                this.writeMatch(writer, blockOrDeclaration);
                writer.indentDown();
            }
        }
        writer.writeLine("}");
        return writer.toString();
    }
}
exports.RulesService = RulesService;
//# sourceMappingURL=RulesService.js.map