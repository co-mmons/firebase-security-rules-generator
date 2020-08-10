"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringWriter = void 0;
var StringWriter = /** @class */ (function () {
    function StringWriter(indentChars) {
        if (indentChars === void 0) { indentChars = "    "; }
        this.indentChars = indentChars;
        this.content = "";
        this.indentLevel = 0;
    }
    StringWriter.prototype.write = function () {
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        for (var _a = 0, values_1 = values; _a < values_1.length; _a++) {
            var value = values_1[_a];
            var lines = (value ? value : "").split("\n");
            for (var i = 0; i < lines.length; i++) {
                if (i > 0) {
                    this.line();
                }
                this.content += lines[i] || "";
            }
        }
        return this;
    };
    StringWriter.prototype.line = function (lineCount) {
        if (lineCount === void 0) { lineCount = 1; }
        for (var i = 1; i <= lineCount; i++) {
            this.content += "\n";
        }
        for (var i = 1; i <= this.indentLevel; i++) {
            this.content += this.indentChars;
        }
        return this;
    };
    StringWriter.prototype.writeLine = function () {
        var value = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            value[_i] = arguments[_i];
        }
        this.line(1);
        this.write.apply(this, value);
        return this;
    };
    StringWriter.prototype.indentUp = function (times) {
        if (times === void 0) { times = 1; }
        this.indentLevel += times;
        return this;
    };
    StringWriter.prototype.indentDown = function (times) {
        if (times === void 0) { times = 1; }
        this.indentLevel -= times;
        return this;
    };
    StringWriter.prototype.fixIdent = function (value) {
        var current = "";
        for (var i = 1; i <= this.indentLevel; i++) {
            current += this.indentChars;
        }
        return value.replace(new RegExp("^" + this.indentChars, "mg"), current);
    };
    StringWriter.prototype.toString = function () {
        return this.content;
    };
    return StringWriter;
}());
exports.StringWriter = StringWriter;
//# sourceMappingURL=StringWriter.js.map