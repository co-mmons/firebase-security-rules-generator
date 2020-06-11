import {InternalRulesValue} from "firebase-security-rules-generator/internal";
import {RulesExpression} from "../core/RulesExpression";
import {RulesRequestAuth as $RequestAuth} from "../core/RulesRequestAuth";
import {RulesValue} from "../core/RulesValue";
import {RulesString} from "./RulesString";

export function auth() {
    // @ts-ignore
    const auth = new RulesRequestAuth();
    (auth as any as InternalRulesValue).__rulesInitProperties();
    return auth;
}

export class RulesRequestAuth extends RulesValue implements $RequestAuth {

    private constructor() {
        super();

        (this as any as InternalRulesValue).__rulesExpression = RulesExpression.l`request.auth`;
    }

    uid = new RulesString;
}
