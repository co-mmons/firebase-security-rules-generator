import { RulesRequestAuth as $RequestAuth } from "../core/RulesRequestAuth";
import { RulesMap } from "./RulesMap";
import { RulesValue } from "./RulesValue";
import { RulesString } from "./RulesString";
export declare function auth(): any;
export declare class RulesRequestAuth extends RulesValue implements $RequestAuth {
    private constructor();
    readonly uid: RulesString;
    /**
     * A map of JWT token claims.
     * @see https://firebase.google.com/docs/reference/rules/rules.firestore.Request#auth
     */
    readonly token: RulesMap;
}
