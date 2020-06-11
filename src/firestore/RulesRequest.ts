import {RulesExpression} from "../core/RulesExpression";
import {RulesRequest as $Request} from "../core/RulesRequest";
import {RulesValue} from "../core/RulesValue";
import {InternalRulesValue} from "../internal";
import {RulesMap} from "./RulesMap";
import {RulesRequestAuth} from "./RulesRequestAuth";
import {RulesResource} from "./RulesResource";

export function request<C extends RulesMap<C>>(resourceData?: C): RulesRequest<C> {
    // @ts-ignore
    return new RulesRequest((resourceData as any as InternalRulesValue).__rulesClone() as any);
}

export class RulesRequest<D extends RulesMap<D>> extends RulesValue implements $Request {

    protected constructor(data: D) {
        super();

        // @ts-ignore
        this.resource = new RulesResource(data);

        // @ts-ignore
        this.auth = new RulesRequestAuth();

        (this as any as InternalRulesValue).__rulesInitProperties();
        (this as any as InternalRulesValue).__rulesExpression = RulesExpression.l`request`;
    }

    readonly resource: RulesResource<D>;

    readonly auth: RulesRequestAuth;

}
