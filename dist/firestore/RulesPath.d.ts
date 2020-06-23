import { RulesMap } from "./RulesMap";
import { RulesValue } from "./RulesValue";
/**
 * Directory-like pattern for the location of a resource.
 *
 * {@link https://firebase.google.com/docs/reference/rules/rules.Path}
 */
export declare class RulesPath extends RulesValue {
    bind(map: RulesMap | {
        [key: string]: any;
    }): RulesPath;
}
export declare function path(path: string): RulesPath;
export declare namespace RulesPath {
    function value(stringPath: string): RulesPath;
}
