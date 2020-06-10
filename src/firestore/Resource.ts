import {RulesMap} from "./RulesMap";

export class Resource<D extends RulesMap<D>> {

    constructor(public readonly data: D) {
    }
}
