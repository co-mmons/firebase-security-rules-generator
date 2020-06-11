import {RulesBoolean} from "./RulesBoolean";
import {equals as $equals} from "../core/equals";

export function equals(left: any, right: any) {
    return new RulesBoolean($equals(left, right));
}
