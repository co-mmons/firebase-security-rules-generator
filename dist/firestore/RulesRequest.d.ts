import { RulesRequest as $Request } from "../core/RulesRequest";
import { RulesValue } from "../core/RulesValue";
import { RulesMap } from "./RulesMap";
import { RulesRequestAuth } from "./RulesRequestAuth";
import { RulesResource } from "./RulesResource";
export declare function request<C extends RulesMap<C>>(resourceData?: C): RulesRequest<C>;
export declare class RulesRequest<D extends RulesMap<D>> extends RulesValue implements $Request {
    protected constructor(data: D);
    readonly resource: RulesResource<D>;
    readonly auth: RulesRequestAuth;
}
