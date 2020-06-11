import { RulesRequestAuth as $RequestAuth } from "../core/RulesRequestAuth";
import { RulesValue } from "../core/RulesValue";
import { RulesString } from "./RulesString";
export declare function auth(): any;
export declare class RulesRequestAuth extends RulesValue implements $RequestAuth {
    private constructor();
    uid: RulesString;
}
