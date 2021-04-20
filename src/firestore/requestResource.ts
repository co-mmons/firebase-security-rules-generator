import {request} from "./request";
import {RulesMap} from "./RulesMap";
import {RulesResourceKnownData, RulesResourceUnknownData} from "./RulesResource";

export function requestResource(): RulesResourceUnknownData;

export function requestResource<D extends RulesMap>(resourceData: D): RulesResourceKnownData<D>;

export function requestResource<D extends RulesMap>(resourceData?: D) {
    return request(resourceData).resource;
}