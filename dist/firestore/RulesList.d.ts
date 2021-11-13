import { RulesExpression } from "../core/RulesExpression";
import { RulesList as $RulesList } from "../core/RulesList";
import { AssignableType } from "../utils/Type";
import { RulesBoolean } from "./RulesBoolean";
import { RulesInteger } from "./RulesInteger";
import { RulesValue } from "./RulesValue";
/**
 * List type. Items are not necessarily homogenous.
 *
 * {@link https://firebase.google.com/docs/reference/rules/rules.List}
 */
export declare class RulesList<T = any> extends RulesValue implements $RulesList {
    constructor();
    constructor(array: Array<string | number>);
    constructor(expression: RulesExpression);
    get<T extends RulesValue = RulesValue>(index: number, valueType?: AssignableType<T>): T;
    /**
     * Get the number of values in the list.
     */
    size(): RulesInteger;
    /**
     * Determine whether the list contains all elements in another list.
     */
    hasAll(list: RulesList | Array<RulesValue | string | number | boolean>): RulesBoolean;
    /**
     * Determine whether the list contains any element in another list.
     */
    hasAny(list: RulesList | Array<RulesValue | string | number | boolean>): RulesBoolean;
    /**
     * Determine whether all elements in the list are present in another list.
     */
    hasOnly(list: RulesList | Array<RulesValue | string | number | boolean>): RulesBoolean;
    private buildHasExpression;
}
