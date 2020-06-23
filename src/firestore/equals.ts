import {RulesBoolean} from "./RulesBoolean";
import {equals as $equals} from "../core/equals";

export function equals(left: any, right: any, not?: boolean) {
    return new RulesBoolean($equals(left, right, not));
}
