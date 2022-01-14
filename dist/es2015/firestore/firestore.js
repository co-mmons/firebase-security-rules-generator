"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.firestore = void 0;
const RulesService_1 = require("../core/RulesService");
const getResourceDataNative_1 = require("./getResourceDataNative");
const addedOrChangedKeysMapDiffNative_1 = require("./addedOrChangedKeysMapDiffNative");
function firestore(...declarations) {
    return new class extends RulesService_1.RulesService {
        constructor() {
            super("cloud.firestore", 2, [getResourceDataNative_1.getResourceDataNative, addedOrChangedKeysMapDiffNative_1.addedOrChangedKeysMapDiffNative, ...declarations]);
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
exports.firestore = firestore;
//# sourceMappingURL=firestore.js.map