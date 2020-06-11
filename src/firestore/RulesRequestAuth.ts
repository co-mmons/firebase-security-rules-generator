import {RulesRequestAuth as $RequestAuth} from "../core/RulesRequestAuth";
import {RulesValue} from "../core/RulesValue";
import {RulesString} from "./RulesString";

export class RulesRequestAuth extends RulesValue implements $RequestAuth {

    private constructor() {
        super();
        this.toString = () => "request.auth";
    }

    uid = new RulesString;
}
