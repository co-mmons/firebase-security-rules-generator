import { RulesValue } from "./RulesValue";
import { AssignableType } from "../utils/Type";
import { RulesMap } from "./RulesMap";
import { RulesPath } from "./RulesPath";
import { RulesString } from "./RulesString";
export interface RulesResource {
    readonly id: RulesString;
    readonly __name__: RulesPath;
    data(): RulesMap;
}
export declare class RulesResourceKnownData<D extends RulesMap> extends RulesValue {
    constructor(data: D);
    private readonly $data;
    readonly id: RulesString;
    readonly __name__: RulesPath;
    data(): D;
}
export declare class RulesResourceUnknownData extends RulesValue {
    constructor();
    readonly id: RulesString;
    readonly __name__: RulesPath;
    data<T extends RulesMap = RulesMap>(dataType?: AssignableType<T>): T;
}
