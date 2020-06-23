"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.firestore = void 0;
var tslib_1 = require("tslib");
var RulesService_1 = require("../core/RulesService");
var getResourceDataNative_1 = require("./getResourceDataNative");
function firestore() {
    var declarations = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        declarations[_i] = arguments[_i];
    }
    return new /** @class */ (function (_super) {
        tslib_1.__extends(class_1, _super);
        function class_1() {
            return _super.call(this, "cloud.firestore", 2, tslib_1.__spreadArrays([getResourceDataNative_1.getResourceDataNative], declarations)) || this;
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
    }(RulesService_1.RulesService));
}
exports.firestore = firestore;
//# sourceMappingURL=firestore.js.map