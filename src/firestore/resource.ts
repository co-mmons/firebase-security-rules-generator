import {RulesExpression} from "../core/RulesExpression";
import {InternalRulesValue} from "../internal";
import {RulesMap} from "./RulesMap";
import {RulesResource, RulesResourceKnownData, RulesResourceUnknownData} from "./RulesResource";

export function resource<D extends RulesMap>(): RulesResourceUnknownData;

export function resource<D extends RulesMap>(data: D): RulesResourceKnownData<D>;

export function resource<D extends RulesMap>(data?: D): RulesResource {
    const resource = data ? new RulesResourceKnownData(data) : new RulesResourceUnknownData();
    (resource as any as InternalRulesValue).__rulesExpression = RulesExpression.l`resource`;
    return resource;
}