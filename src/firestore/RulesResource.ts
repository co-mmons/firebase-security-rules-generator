import {RulesExpression} from "../core/RulesExpression";
import {RulesValue} from "../core/RulesValue";
import {InternalRulesValue} from "../internal";
import {AssignableType} from "../utils/Type";
import {RulesMap} from "./RulesMap";
import {RulesPath} from "./RulesPath";
import {RulesString} from "./RulesString";

export class RulesResource extends RulesValue implements RulesResource {

    constructor(public readonly data = new RulesMap) {
        super()
    }

    readonly id = new RulesString;

    readonly __name__ = new RulesPath;

    dataAs<T extends RulesMap>(dataType: AssignableType<T>): T {
        const data = new dataType();
        (data as any as InternalRulesValue).__rulesExpression = new RulesExpression(this, RulesExpression.l`.data`);
        return data;
    }

}
