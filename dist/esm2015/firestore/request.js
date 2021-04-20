import { RulesRequestImpl } from "./RulesRequest";
import { RulesResourceKnownData, RulesResourceUnknownData } from "./RulesResource";
export function request(resourceData) {
    let resource;
    if (resourceData) {
        resource = new RulesResourceKnownData(resourceData);
    }
    else {
        resource = new RulesResourceUnknownData();
    }
    return new RulesRequestImpl(resource);
}
//# sourceMappingURL=request.js.map