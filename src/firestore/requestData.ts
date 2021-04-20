import {InternalRulesValue} from "../internal";
import {request} from "./request";
import {RulesMap} from "./RulesMap";
import {RulesRequest, RulesRequestKnownResourceData, RulesRequestUnknownResourceData} from "./RulesRequest";
import {RulesResourceKnownData, RulesResourceUnknownData} from "./RulesResource";

export function requestData(): RulesMap;

export function requestData<D extends RulesMap>(resourceData: D): D;

export function requestData<D extends RulesMap>(resourceData?: D) {
    if (resourceData) {
        return request(resourceData).resource.data();
    } else {
        return request().resource.data();
    }
}
