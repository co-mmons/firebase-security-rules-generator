import { orExpression } from "../core/orExpression";
import { RulesBoolean } from "./RulesBoolean";
export function or() {
    var parts = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        parts[_i] = arguments[_i];
    }
    return new RulesBoolean(orExpression.apply(void 0, parts));
}
//# sourceMappingURL=or.js.map