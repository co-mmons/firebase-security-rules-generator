import {RulesExpression} from "../core/RulesExpression";
import {RulesMap} from "./RulesMap";
import {RulesValue} from "./RulesValue";

/**
 * Directory-like pattern for the location of a resource.
 *
 * {@link https://firebase.google.com/docs/reference/rules/rules.Path}
 */
export class RulesPath extends RulesValue {

    bind(map: RulesMap | {[key: string]: any}) {
        return new RulesPath(new RulesExpression(RulesExpression.l`(`, this, RulesExpression.l`).bind(`, map, RulesExpression.l`)`));
    }

}

export function path(path: string) {
    return new RulesPath(new RulesExpression(RulesExpression.l`path(`, path, RulesExpression.l`)`));
}

export namespace RulesPath {

    export function value(stringPath: string) {
        return path(stringPath);
    }

}
