"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RulesService = void 0;
var utils_1 = require("../utils");
var RulesExpression_1 = require("./RulesExpression");
var RulesService = /** @class */ (function () {
    function RulesService(name, version, blocksAndDeclarations) {
        this.name = name;
        this.version = version;
        this.blocksAndDeclarations = blocksAndDeclarations;
    }
    RulesService.prototype.writeMatch = function (writer, matchConstructor) {
        for (var _i = 0, _a = matchConstructor.__rulesMatchFunctions || []; _i < _a.length; _i++) {
            var func = _a[_i];
            if (func.global) {
                this.writeFunction(writer, func, matchConstructor, matchConstructor);
            }
        }
        writer.writeLine("match ", matchConstructor.__rulesMatchPath, " {");
        writer.indentUp();
        writer.line();
        var matchInstance = new matchConstructor();
        for (var _b = 0, _c = matchConstructor.__rulesMatchFunctions || []; _b < _c.length; _b++) {
            var func = _c[_b];
            if (!func.global) {
                this.writeFunction(writer, func, matchConstructor, matchInstance);
            }
        }
        for (var _d = 0, _e = matchConstructor.__rulesMatchAllows || []; _d < _e.length; _d++) {
            var allow = _e[_d];
            this.writeAllow(writer, allow, matchConstructor, matchInstance);
        }
        writer.indentDown();
        writer.writeLine("}");
    };
    RulesService.prototype.writeAllow = function (writer, allow, matchConstructor, matchInstance) {
        writer.writeLine("allow ", allow.operations.join(", "), ": if ");
        if (allow.negate) {
            writer.write("!(");
        }
        this.toExpression(allow.body(matchInstance)).write(writer);
        if (allow.negate) {
            writer.write(")");
        }
        writer.write(";");
        writer.writeLine();
    };
    RulesService.prototype.writeFunction = function (writer, func, matchConstructor, matchInstance) {
        writer.writeLine("function ", func.name, "(");
        for (var i = 0; i < (func.args || []).length; i++) {
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
    };
    RulesService.prototype.toExpression = function (value) {
        if (value instanceof RulesExpression_1.RulesExpression) {
            return value;
        }
        else {
            return new RulesExpression_1.RulesExpression(value);
        }
    };
    RulesService.prototype.writeServiceStart = function (writer) {
    };
    RulesService.prototype.writeServiceEnd = function (writer) {
    };
    RulesService.prototype.toString = function () {
        var writer = new utils_1.StringWriter();
        writer.write("rules_version = '2';").line();
        writer.write("service " + this.name + " {");
        this.writeServiceStart(writer);
        for (var _i = 0, _a = this.blocksAndDeclarations || []; _i < _a.length; _i++) {
            var blockOrDeclaration = _a[_i];
            if (blockOrDeclaration.__rulesMatchPath && typeof blockOrDeclaration === "function") {
                writer.line();
                writer.indentUp();
                this.writeMatch(writer, blockOrDeclaration);
                writer.indentDown();
            }
            else if (blockOrDeclaration instanceof RulesExpression_1.RulesExpression) {
                writer.indentUp();
                writer.line();
                blockOrDeclaration.write(writer);
                writer.indentDown();
            }
        }
        this.writeServiceEnd(writer);
        writer.writeLine("}");
        return writer.toString();
    };
    return RulesService;
}());
exports.RulesService = RulesService;
//# sourceMappingURL=RulesService.js.map