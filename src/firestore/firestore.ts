import {RulesService} from "../core/RulesService";
import {Type} from "../utils";

export function firestore(...resourceOrFunction: Array<Type<any>>): RulesService {
    return new RulesService("cloud.firestore", 2, resourceOrFunction);
}
