import { RulesBoolean } from "./RulesBoolean";
import { equals as $equals } from "../core/equals";
export function equals(left, right, not) {
    return new RulesBoolean($equals(left, right, not));
}
//# sourceMappingURL=equals.js.map