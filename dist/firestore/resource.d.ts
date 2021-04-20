import { RulesMap } from "./RulesMap";
import { RulesResourceKnownData, RulesResourceUnknownData } from "./RulesResource";
export declare function resource<D extends RulesMap>(): RulesResourceUnknownData;
export declare function resource<D extends RulesMap>(data: D): RulesResourceKnownData<D>;
