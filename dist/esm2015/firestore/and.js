import { andExpression } from "../core/andExpression";
import { RulesBoolean } from "./RulesBoolean";
export function and(...parts) {
    return new RulesBoolean(andExpression(...parts));
}
//# sourceMappingURL=and.js.map