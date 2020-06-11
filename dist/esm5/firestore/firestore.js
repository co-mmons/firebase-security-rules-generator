import { RulesService } from "../core/RulesService";
export function firestore() {
    var resourceOrFunction = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        resourceOrFunction[_i] = arguments[_i];
    }
    return new RulesService("cloud.firestore", 2, resourceOrFunction);
}
//# sourceMappingURL=firestore.js.map