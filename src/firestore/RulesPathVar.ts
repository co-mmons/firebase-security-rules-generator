import {InternalRulesPathVar, InternalRulesValue} from "../internal";
import {RulesString} from "./RulesString";

export class RulesPathVar extends RulesString {

    constructor(varName?: string) {
        super();

        (this as any as InternalRulesPathVar).__rulesPathVar = true;

        if (varName) {
            (this as any as InternalRulesValue).__rulesAccessorName = varName;
        }

        this.toString = () => (this as any as InternalRulesValue).__rulesAccessorName;
    }

}
