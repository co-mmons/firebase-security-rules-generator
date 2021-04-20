import { RulesRequest as $Request } from "../core/RulesRequest";
import { RulesMap } from "./RulesMap";
import { RulesRequestAuth } from "./RulesRequestAuth";
import { RulesResource, RulesResourceKnownData, RulesResourceUnknownData } from "./RulesResource";
import { RulesString } from "./RulesString";
import { RulesTimestamp } from "./RulesTimestamp";
import { RulesValue } from "./RulesValue";
export interface RulesRequest extends $Request {
    readonly resource: RulesResource;
    readonly method: RulesString;
    readonly time: RulesTimestamp;
    readonly auth: RulesRequestAuth;
}
export interface RulesRequestKnownResourceData<D extends RulesMap> extends RulesRequest {
    readonly resource: RulesResourceKnownData<D>;
}
export interface RulesRequestUnknownResourceData extends RulesRequest {
    readonly resource: RulesResourceUnknownData;
}
export declare class RulesRequestImpl<R extends RulesResource> extends RulesValue implements RulesRequest {
    readonly resource: R;
    constructor(resource: R);
    readonly auth: any;
    readonly time: RulesTimestamp;
    /**
     * The request method. One of:
     * - get
     * - list
     * - create
     * - update
     * - delete
     *
     * @see https://firebase.google.com/docs/reference/rules/rules.firestore.Request#method
     */
    readonly method: RulesString;
}
