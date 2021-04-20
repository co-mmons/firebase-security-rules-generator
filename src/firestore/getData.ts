import {RulesExpression} from "../core/RulesExpression";
import {InternalRulesValue} from "../internal";
import {AssignableType} from "../utils/Type";
import {get} from "./get";
import {RulesMap} from "./RulesMap";
import {RulesPath} from "./RulesPath";

/**
 * Get data of resource denoted by given path. Inside it's using {@link get} to access a resource.
 *
 * @param path Path to a resource.
 * @param dataType Type of data, that is contained within given resource.
 * @return Data or null if resource not exists.
 *
 * @see https://firebase.google.com/docs/reference/rules/rules.firestore#.get
 */
export function getData<D extends RulesMap>(path: RulesPath | string, dataType: AssignableType<D>): D {
    const data: D = new dataType();
    (data as any as InternalRulesValue).__rulesExpression = new RulesExpression(RulesExpression.l`__getResourceData(`, get(path), RulesExpression.l`)`);
    (data as any as InternalRulesValue).__rulesInitProperties();
    return data;
}
