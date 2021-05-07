"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RulesList = void 0;
const RulesExpression_1 = require("../core/RulesExpression");
const RulesBoolean_1 = require("./RulesBoolean");
const RulesInteger_1 = require("./RulesInteger");
const RulesValue_1 = require("./RulesValue");
/**
 * List type. Items are not necessarily homogenous.
 *
 * {@link https://firebase.google.com/docs/reference/rules/rules.List}
 */
class RulesList extends RulesValue_1.RulesValue {
    constructor(arrayOrExpression) {
        if (Array.isArray(arrayOrExpression)) {
            super(new RulesExpression_1.RulesExpression(RulesExpression_1.RulesExpression.l `[`, arrayOrExpression, RulesExpression_1.RulesExpression.l `]`));
        }
        else if (arrayOrExpression) {
            super(arrayOrExpression);
        }
        else {
            super();
        }
    }
    /**
     * Get the number of values in the list.
     */
    size() {
        return new RulesInteger_1.RulesInteger(new RulesExpression_1.RulesExpression(this, RulesExpression_1.RulesExpression.l `.size()`));
    }
    /**
     * Determine whether the list contains all elements in another list.
     */
    hasAll(list) {
        return this.buildHasExpression("hasAny", list);
    }
    /**
     * Determine whether the list contains any element in another list.
     */
    hasAny(list) {
        return this.buildHasExpression("hasAny", list);
    }
    /**
     * Determine whether all elements in the list are present in another list.
     */
    hasOnly(list) {
        return this.buildHasExpression("hasOnly", list);
    }
    buildHasExpression(method, list) {
        const expression = [this, RulesExpression_1.RulesExpression.l `.${method}(`];
        if (list instanceof Array) {
            expression.push(RulesExpression_1.RulesExpression.l `[`);
            for (let i = 0; i < list.length; i++) {
                if (i > 0) {
                    expression.push(RulesExpression_1.RulesExpression.l `, `);
                }
                expression.push(list[i]);
            }
            expression.push(RulesExpression_1.RulesExpression.l `]`);
        }
        expression.push(RulesExpression_1.RulesExpression.l `)`);
        return new RulesBoolean_1.RulesBoolean(new RulesExpression_1.RulesExpression(expression));
    }
}
exports.RulesList = RulesList;
//# sourceMappingURL=RulesList.js.map