import { RulesService } from "../core/RulesService";
export function firestore(...resourceOrFunction) {
    return new RulesService("cloud.firestore", 2, resourceOrFunction);
}
//# sourceMappingURL=firestore.js.map