import {RulesExpression} from "../core/RulesExpression";
import {InternalRulesPathVar, InternalRulesValue} from "../internal";
import {RulesString} from "./RulesString";

export class RulesPathVar extends RulesString {

    constructor(varName?: string) {
        super();

        (this as any as InternalRulesPathVar).__rulesPathVar = true;

        if (varName) {
            (this as any as InternalRulesValue).__rulesAccessorName = varName;
        }

        (this as any as InternalRulesValue).__rulesValueAsExpression = () => RulesExpression.l`${(this as any as InternalRulesValue).__rulesAccessorName}`;
    }

}
