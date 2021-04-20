import { RulesMap } from "./RulesMap";
import { RulesRequestKnownResourceData, RulesRequestUnknownResourceData } from "./RulesRequest";
export declare function request<D extends RulesMap>(resourceData: D): RulesRequestKnownResourceData<D>;
export declare function request(): RulesRequestUnknownResourceData;
