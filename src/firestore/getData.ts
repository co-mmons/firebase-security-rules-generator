/**
 * Get the contents of a firestore document.
 *
 * {@link https://firebase.google.com/docs/reference/rules/rules.firestore#.get}
 */
import {RulesExpression} from "../core/RulesExpression";
import {InternalRulesValue} from "../internal";
import {AssignableType} from "../utils/Type";
import {get} from "./get";
import {or} from "./or";
import {RulesMap} from "./RulesMap";
import {RulesPath} from "./RulesPath";

export function getData<D extends RulesMap>(path: RulesPath | string, dataType: AssignableType<D>): D {
    const data: D = new dataType();
    (data as any as InternalRulesValue).__rulesExpression = new RulesExpression(RulesExpression.l`__getResourceData(`, get(path), RulesExpression.l`)`);
    return data;
}
