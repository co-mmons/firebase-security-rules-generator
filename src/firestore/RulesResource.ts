import {RulesExpression} from "../core/RulesExpression";
import {RulesValue} from "./RulesValue";
import {InternalRulesValue} from "../internal";
import {AssignableType} from "../utils/Type";
import {RulesMap} from "./RulesMap";
import {RulesPath} from "./RulesPath";
import {RulesString} from "./RulesString";

export class RulesResource extends RulesValue implements RulesResource {

    constructor(private readonly $data = new RulesMap) {
        super()
    }

    readonly id = new RulesString;

    readonly __name__ = new RulesPath;

    data<T extends RulesMap = RulesMap>(dataType?: AssignableType<T>): T {

        if (dataType) {
            return this.$data as T;
        } else {
            const data = new dataType();
            (data as any as InternalRulesValue).__rulesExpression = new RulesExpression(this, RulesExpression.l`.data`);
            return data;
        }
    }

}
