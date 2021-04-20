import {InternalRulesValue} from "../internal";
import {RulesMap} from "./RulesMap";
import {RulesRequest, RulesRequestImpl, RulesRequestKnownResourceData, RulesRequestUnknownResourceData} from "./RulesRequest";

export function request<D extends RulesMap>(resourceData: D): RulesRequestKnownResourceData<D>;

export function request(): RulesRequestUnknownResourceData;

export function request<D extends RulesMap>(resourceData?: D): RulesRequest {

    if (!resourceData) {
        resourceData = new RulesMap() as any;
    }

    // @ts-ignore
    return new RulesRequestImpl((resourceData as any as InternalRulesValue).__rulesClone() as any);
}
