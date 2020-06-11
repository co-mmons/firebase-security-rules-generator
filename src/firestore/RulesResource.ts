import {RulesValue} from "../core/RulesValue";
import {RulesMap} from "./RulesMap";

export class RulesResource<D extends RulesMap<D>> extends RulesValue {

    private constructor(public readonly data: D) {
        super();
    }
}
