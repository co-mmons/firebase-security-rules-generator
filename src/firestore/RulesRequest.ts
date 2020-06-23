import {RulesExpression} from "../core/RulesExpression";
import {RulesRequest as $Request} from "../core/RulesRequest";
import {RulesValue} from "../core/RulesValue";
import {InternalRulesValue} from "../internal";
import {RulesMap} from "./RulesMap";
import {RulesRequestAuth} from "./RulesRequestAuth";
import {RulesResource} from "./RulesResource";

export function request<D extends RulesMap>(resourceData?: D): RulesRequest & {resource: {data: D}} {
    // @ts-ignore
    return new RulesRequestImpl((resourceData as any as InternalRulesValue).__rulesClone() as any);
}

export interface RulesRequest extends $Request {
    readonly resource: RulesResource;
}

class RulesRequestImpl extends RulesValue implements RulesRequest {

    constructor(data: RulesMap) {
        super();

        this.resource = new RulesResource(data);

        // @ts-ignore
        this.auth = new RulesRequestAuth();

        (this as any as InternalRulesValue).__rulesInitProperties();
        (this as any as InternalRulesValue).__rulesExpression = RulesExpression.l`request`;
    }

    readonly resource: RulesResource;

    readonly auth: RulesRequestAuth;

}
