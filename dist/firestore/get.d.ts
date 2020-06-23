import { RulesMap } from "./RulesMap";
import { RulesPath } from "./RulesPath";
import { RulesResource } from "./RulesResource";
/**
 * Get the contents of a firestore document.
 *
 * @see https://firebase.google.com/docs/reference/rules/rules.firestore#.get
 */
export declare function get<D extends RulesMap>(path: RulesPath | string): RulesResource;
