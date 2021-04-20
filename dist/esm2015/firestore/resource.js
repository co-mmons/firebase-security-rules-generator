import { RulesExpression } from "../core/RulesExpression";
import { RulesResourceKnownData, RulesResourceUnknownData } from "./RulesResource";
export function resource(data) {
    const resource = data ? new RulesResourceKnownData(data) : new RulesResourceUnknownData();
    resource.__rulesExpression = RulesExpression.l `resource`;
    return resource;
}
//# sourceMappingURL=resource.js.map