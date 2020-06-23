import { RulesService } from "../core/RulesService";
import { getResourceDataNative } from "./getResourceDataNative";
export function firestore(...declarations) {
    return new class extends RulesService {
        constructor() {
            super("cloud.firestore", 2, [getResourceDataNative, ...declarations]);
        }
        writeServiceStart(writer) {
            writer
                .indentUp()
                .writeLine("match /databases/{database}/documents {")
                .line();
        }
        writeServiceEnd(writer) {
            writer
                .line()
                .writeLine("}")
                .indentDown();
        }
    };
}
//# sourceMappingURL=firestore.js.map