import { RulesExpression } from "../core/RulesExpression";
import { AssignableType } from "../utils/Type";
import { RulesBoolean } from "./RulesBoolean";
import { RulesInteger } from "./RulesInteger";
import { RulesList } from "./RulesList";
import { RulesValue } from "./RulesValue";
/**
 * List type. Items are not necessarily homogenous.
 *
 * {@link https://firebase.google.com/docs/reference/rules/rules.Set}
 */
export declare class RulesSet<T = any> extends RulesValue {
    private readonly valueType?;
    constructor();
    constructor(expression: RulesExpression);
    constructor(expression: RulesExpression, valueType: AssignableType<T>);
    get<T extends RulesValue = RulesValue>(index: number, valueType?: AssignableType<T>): T;
    size(): RulesInteger;
    hasAll(collection: RulesSet | RulesList | Array<RulesValue | string | number | boolean>): RulesBoolean;
    hasAny(list: RulesSet | RulesList | Array<RulesValue | string | number | boolean>): RulesBoolean;
    hasOnly(list: RulesSet | RulesList | Array<RulesValue | string | number | boolean>): RulesBoolean;
    private buildHasExpression;
}
