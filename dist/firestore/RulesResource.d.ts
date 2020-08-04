import { RulesValue } from "../core/RulesValue";
import { AssignableType } from "../utils/Type";
import { RulesMap } from "./RulesMap";
import { RulesPath } from "./RulesPath";
import { RulesString } from "./RulesString";
export declare class RulesResource extends RulesValue implements RulesResource {
    private readonly $data;
    constructor($data?: RulesMap);
    readonly id: RulesString;
    readonly __name__: RulesPath;
    data<T extends RulesMap = RulesMap>(dataType?: AssignableType<T>): T;
}
