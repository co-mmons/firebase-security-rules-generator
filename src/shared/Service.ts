import {InternalFunctionRef, InternalMatchTypeConstructor} from "../internal";
import {StringWriter} from "../utils";

export class Service {

    constructor(protected readonly name: "firebase.storage" | "cloud.firestore", protected readonly version: 1 | 2, protected readonly blocksAndDeclarations: Array<any & InternalMatchTypeConstructor>) {
    }

    protected writeMatch(writer: StringWriter, matchConstructor: InternalMatchTypeConstructor) {
        writer.writeLine("match ", matchConstructor.__rulesMatchPath, " {")
        writer.indentUp();
        writer.line();

        const matchInstance = new matchConstructor();

        for (const func of matchConstructor.__rulesMatchFunctions || []) {
            this.writeFunction(writer, func, matchConstructor, matchInstance);
        }

        writer.line();
        writer.indentDown();
        writer.writeLine("}");
    }

    protected writeFunction(writer: StringWriter, func: InternalFunctionRef, matchConstructor?: InternalMatchTypeConstructor, matchInstance?: any) {
        writer.writeLine("function ", func.name, "(");

        for (let i = 0; i < (func.args || []).length; i++) {

            if (i > 0) {
                writer.write(", ");
            }

            writer.write(func.args[i]);
        }

        writer.write(") {");

        writer.writeLine(func.call(matchInstance));

        writer.writeLine("}");
    }

    toString() {

        const writer = new StringWriter();

        writer.write(`service ${this.name} {`);

        for (const blockOrDeclaration of this.blocksAndDeclarations || []) {

            if (blockOrDeclaration.__rulesMatchPath && typeof blockOrDeclaration === "function") {
                writer.line();
                writer.indentUp();
                this.writeMatch(writer, blockOrDeclaration);
                writer.indentDown();
            }

        }

        writer.writeLine("}")

        return writer.toString();
    }
}
