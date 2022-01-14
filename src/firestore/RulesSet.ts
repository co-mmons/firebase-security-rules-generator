import {RulesExpression} from "../core/RulesExpression";
import {RulesList as $RulesList} from "../core/RulesList";
import {InternalRulesValue} from "../internal";
import {AssignableType} from "../utils/Type";
import {RulesBoolean} from "./RulesBoolean";
import {RulesInteger} from "./RulesInteger";
import {RulesList} from "./RulesList";
import {RulesValue} from "./RulesValue";

/**
 * List type. Items are not necessarily homogenous.
 *
 * {@link https://firebase.google.com/docs/reference/rules/rules.Set}
 */
export class RulesSet<T = any> extends RulesValue {

    constructor();

    constructor(expression: RulesExpression);

    constructor(expression: RulesExpression, valueType: AssignableType<T>);

    constructor(expression?: RulesExpression, private readonly valueType?: AssignableType<T>) {
        super(expression);
    }

    get<T extends RulesValue = RulesValue>(index: number, valueType?: AssignableType<T>) {
        const type = new (valueType || this.valueType || RulesValue);
        (type as any as InternalRulesValue).__rulesExpression = new RulesExpression(RulesExpression.l`(`, this, RulesExpression.l`)`, RulesExpression.l`[`, index, RulesExpression.l`]`);
        return type as T;
    }

    size() {
        return new RulesInteger(new RulesExpression(this, RulesExpression.l`.size()`));
    }

    hasAll(collection: RulesSet | RulesList | Array<RulesValue | string | number | boolean>) {
        return this.buildHasExpression("hasAll", collection);
    }

    hasAny(list: RulesSet | RulesList | Array<RulesValue | string | number | boolean>) {
        return this.buildHasExpression("hasAny", list);
    }

    hasOnly(list: RulesSet | RulesList | Array<RulesValue | string | number | boolean>) {
        return this.buildHasExpression("hasOnly", list);
    }

    private buildHasExpression(method: "hasOnly" | "hasAny" | "hasAll", list: RulesSet | RulesList | Array<RulesValue | string | number | boolean>) {

        const expression: any[] = [this, RulesExpression.l`.${method}(`];

        if (list instanceof Array) {
            expression.push(RulesExpression.l`[`);

            for (let i = 0; i < list.length; i++) {

                if (i > 0) {
                    expression.push(RulesExpression.l`, `);
                }

                expression.push(list[i]);
            }

            expression.push(RulesExpression.l`]`);
        } else {
            expression.push(list);
        }

        expression.push(RulesExpression.l`)`);

        return new RulesBoolean(new RulesExpression(expression));
    }

}
