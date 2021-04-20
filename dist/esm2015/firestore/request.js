import { RulesMap } from "./RulesMap";
import { RulesRequestImpl } from "./RulesRequest";
export function request(resourceData) {
    if (!resourceData) {
        resourceData = new RulesMap();
    }
    // @ts-ignore
    return new RulesRequestImpl(resourceData.__rulesClone());
}
//# sourceMappingURL=request.js.map