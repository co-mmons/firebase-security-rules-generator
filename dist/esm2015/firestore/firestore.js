import { RulesService } from "../core/RulesService";
import { getResourceDataNative } from "./getResourceDataNative";
import { addedOrChangedKeysMapDiffNative } from "./addedOrChangedKeysMapDiffNative";
export function firestore(...declarations) {
    return new class extends RulesService {
        constructor() {
            super("cloud.firestore", 2, [getResourceDataNative, addedOrChangedKeysMapDiffNative, ...declarations]);
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