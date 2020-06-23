import { notExpression } from "../core/notExpression";
import { RulesBoolean } from "./RulesBoolean";
export function not(value) {
    return new RulesBoolean(notExpression(value));
}
//# sourceMappingURL=not.js.map