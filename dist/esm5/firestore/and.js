import { andExpression } from "../core/andExpression";
import { RulesBoolean } from "./RulesBoolean";
export function and() {
    var parts = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        parts[_i] = arguments[_i];
    }
    return new RulesBoolean(andExpression.apply(void 0, parts));
}
//# sourceMappingURL=and.js.map