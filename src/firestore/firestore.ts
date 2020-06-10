import {Service} from "../shared/Service";
import {Type} from "../utils";

export function firestore(...resourceOrFunction: Array<Type<any>>): Service {
    return new Service("cloud.firestore", 2, resourceOrFunction);
}
