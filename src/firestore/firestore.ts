import {RulesExpression} from "../core/RulesExpression";
import {RulesService} from "../core/RulesService";
import {StringWriter, Type} from "../utils";
import {getResourceDataNative} from "./getResourceDataNative";

export function firestore(...declarations: Array<Type<any> | RulesExpression>): RulesService {
    return new class extends RulesService {
        constructor() {
            super("cloud.firestore", 2, [getResourceDataNative, ...declarations]);
        }

        protected writeServiceStart(writer: StringWriter) {
            writer
                .indentUp()
                .writeLine("match /databases/{database}/documents {")
                .line();
        }

        protected writeServiceEnd(writer: StringWriter) {
            writer
                .line()
                .writeLine("}")
                .indentDown();
        }
    }
}
