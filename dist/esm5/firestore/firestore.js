import { __extends, __spreadArrays } from "tslib";
import { RulesService } from "../core/RulesService";
import { getResourceDataNative } from "./getResourceDataNative";
export function firestore() {
    var declarations = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        declarations[_i] = arguments[_i];
    }
    return new /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            return _super.call(this, "cloud.firestore", 2, __spreadArrays([getResourceDataNative], declarations)) || this;
        }
        class_1.prototype.writeServiceStart = function (writer) {
            writer
                .indentUp()
                .writeLine("match /databases/{database}/documents {")
                .line();
        };
        class_1.prototype.writeServiceEnd = function (writer) {
            writer
                .line()
                .writeLine("}")
                .indentDown();
        };
        return class_1;
    }(RulesService));
}
//# sourceMappingURL=firestore.js.map