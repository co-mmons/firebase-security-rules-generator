import { RulesValue } from "../core/RulesValue";
import { RulesMap } from "./RulesMap";
export declare class RulesResource<D extends RulesMap<D>> extends RulesValue {
    readonly data: D;
    private constructor();
}
