import { RulesValue } from "../core/RulesValue";
import { RulesMap } from "./RulesMap";
import { RulesPath } from "./RulesPath";
import { RulesString } from "./RulesString";
export declare class RulesResource extends RulesValue implements RulesResource {
    readonly data: RulesMap;
    constructor(data?: RulesMap);
    readonly id: RulesString;
    readonly __name__: RulesPath;
}
