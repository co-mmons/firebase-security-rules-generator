import { RulesRequest as $Request } from "../core/RulesRequest";
import { RulesMap } from "./RulesMap";
import { RulesRequestAuth } from "./RulesRequestAuth";
import { RulesResource } from "./RulesResource";
import { RulesString } from "./RulesString";
import { RulesTimestamp } from "./RulesTimestamp";
export declare function request<D extends RulesMap>(resourceData?: D): RulesRequest & {
    resource: {
        data: D;
    };
};
export interface RulesRequest extends $Request {
    readonly resource: RulesResource;
    readonly method: RulesString;
    readonly time: RulesTimestamp;
    readonly auth: RulesRequestAuth;
}
