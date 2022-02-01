import { AssignableType } from "../utils/Type";
import { RulesMap } from "./RulesMap";
import { RulesPath } from "./RulesPath";
/**
 * Get data of resource denoted by given path. Inside it's using {@link get} to access a resource.
 *
 * @param path Path to a resource.
 * @param dataType Type of data, that is contained within given resource.
 * @return Data or null if resource not exists.
 *
 * @see https://firebase.google.com/docs/reference/rules/rules.firestore#.get
 */
export declare function getAfterData<D extends RulesMap>(path: RulesPath | string, dataType: AssignableType<D>): D;
