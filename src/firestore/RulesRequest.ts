import {RulesExpression} from "../core/RulesExpression";
import {RulesRequest as $Request} from "../core/RulesRequest";
import {RulesValue} from "./RulesValue";
import {InternalRulesValue} from "../internal";
import {RulesMap} from "./RulesMap";
import {RulesRequestAuth} from "./RulesRequestAuth";
import {RulesResource} from "./RulesResource";
import {RulesString} from "./RulesString";
import {RulesTimestamp} from "./RulesTimestamp";

export function request<D extends RulesMap>(resourceData?: D): RulesRequest & {resource: {data: D}} {

    if (!resourceData) {
        resourceData = new RulesMap() as any;
    }

    // @ts-ignore
    return new RulesRequestImpl((resourceData as any as InternalRulesValue).__rulesClone() as any);
}

export interface RulesRequest extends $Request {
    readonly resource: RulesResource;
    readonly method: RulesString;
    readonly time: RulesTimestamp;
    readonly auth: RulesRequestAuth;
}

class RulesRequestImpl extends RulesValue implements RulesRequest {

    constructor(data: RulesMap) {
        super();

        this.resource = new RulesResource(data);

        (this as any as InternalRulesValue).__rulesInitProperties();
        (this as any as InternalRulesValue).__rulesExpression = RulesExpression.l`request`;
    }

    readonly resource: RulesResource;

    // @ts-ignore
    readonly auth = new RulesRequestAuth;

    readonly time = new RulesTimestamp;

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
    readonly method = new RulesString;

}
