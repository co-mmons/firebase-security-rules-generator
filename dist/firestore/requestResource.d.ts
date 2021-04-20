import { RulesMap } from "./RulesMap";
import { RulesResourceKnownData, RulesResourceUnknownData } from "./RulesResource";
export declare function requestResource(): RulesResourceUnknownData;
export declare function requestResource<D extends RulesMap>(resourceData: D): RulesResourceKnownData<D>;
