import { StringWriter } from "../utils";
import { RulesExpression } from "./RulesExpression";
var RulesService = /** @class */ (function () {
    function RulesService(name, version, blocksAndDeclarations) {
        this.name = name;
        this.version = version;
        this.blocksAndDeclarations = blocksAndDeclarations;
    }
    RulesService.prototype.writeMatch = function (writer, matchConstructor) {
        writer.writeLine("match ", matchConstructor.__rulesMatchPath, " {");
        writer.indentUp();
        writer.line();
        var matchInstance = new matchConstructor();
        for (var _i = 0, _a = matchConstructor.__rulesMatchFunctions || []; _i < _a.length; _i++) {
            var func = _a[_i];
            this.writeFunction(writer, func, matchConstructor, matchInstance);
        }
        for (var _b = 0, _c = matchConstructor.__rulesMatchAllows || []; _b < _c.length; _b++) {
            var allow = _c[_b];
            this.writeAllow(writer, allow, matchConstructor, matchInstance);
        }
        writer.indentDown();
        writer.writeLine("}");
    };
    RulesService.prototype.writeAllow = function (writer, allow, matchConstructor, matchInstance) {
        writer.writeLine("allow ", allow.operations.join(", "), ": if ");
        this.toExpression(allow.body(matchInstance)).write(writer);
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
        if (value instanceof RulesExpression) {
            return value;
        }
        else {
            return new RulesExpression(value);
        }
    };
    RulesService.prototype.writeServiceStart = function (writer) {
    };
    RulesService.prototype.writeServiceEnd = function (writer) {
    };
    RulesService.prototype.toString = function () {
        var writer = new StringWriter();
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
            else if (blockOrDeclaration instanceof RulesExpression) {
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
export { RulesService };
//# sourceMappingURL=RulesService.js.map