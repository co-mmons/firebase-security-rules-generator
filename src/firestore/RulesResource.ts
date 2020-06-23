import {RulesValue} from "../core/RulesValue";
import {RulesMap} from "./RulesMap";
import {RulesPath} from "./RulesPath";
import {RulesString} from "./RulesString";

export class RulesResource extends RulesValue implements RulesResource {

    constructor(public readonly data = new RulesMap) {
        super()
    }

    readonly id = new RulesString;

    readonly __name__ = new RulesPath;

}
