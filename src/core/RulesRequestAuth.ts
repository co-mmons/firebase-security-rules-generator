import {RulesMap} from "./RulesMap";
import {RulesString} from "./RulesString";

export interface RulesRequestAuth {

    readonly uid: RulesString;

    readonly token: RulesMap;

}
