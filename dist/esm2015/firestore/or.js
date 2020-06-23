import { orExpression } from "../core/orExpression";
import { RulesBoolean } from "./RulesBoolean";
export function or(...parts) {
    return new RulesBoolean(orExpression(...parts));
}
//# sourceMappingURL=or.js.map