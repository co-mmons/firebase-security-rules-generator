import { RulesExpression } from "../core/RulesExpression";
import { RulesValue } from "./RulesValue";
/**
 * Directory-like pattern for the location of a resource.
 *
 * {@link https://firebase.google.com/docs/reference/rules/rules.Path}
 */
export class RulesPath extends RulesValue {
    bind(map) {
        return new RulesPath(new RulesExpression(RulesExpression.l `(`, this, RulesExpression.l `).bind(`, map, RulesExpression.l `)`));
    }
}
export function path(path) {
    return new RulesPath(new RulesExpression(RulesExpression.l `path(`, path, RulesExpression.l `)`));
}
(function (RulesPath) {
    function value(stringPath) {
        return path(stringPath);
    }
    RulesPath.value = value;
})(RulesPath || (RulesPath = {}));
//# sourceMappingURL=RulesPath.js.map