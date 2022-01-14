"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RulesSet = void 0;
const RulesExpression_1 = require("../core/RulesExpression");
const RulesBoolean_1 = require("./RulesBoolean");
const RulesInteger_1 = require("./RulesInteger");
const RulesValue_1 = require("./RulesValue");
/**
 * List type. Items are not necessarily homogenous.
 *
 * {@link https://firebase.google.com/docs/reference/rules/rules.Set}
 */
class RulesSet extends RulesValue_1.RulesValue {
    constructor(expression, valueType) {
        super(expression);
        this.valueType = valueType;
    }
    get(index, valueType) {
        const type = new (valueType || this.valueType || RulesValue_1.RulesValue);
        type.__rulesExpression = new RulesExpression_1.RulesExpression(RulesExpression_1.RulesExpression.l `(`, this, RulesExpression_1.RulesExpression.l `)`, RulesExpression_1.RulesExpression.l `[`, index, RulesExpression_1.RulesExpression.l `]`);
        return type;
    }
    size() {
        return new RulesInteger_1.RulesInteger(new RulesExpression_1.RulesExpression(this, RulesExpression_1.RulesExpression.l `.size()`));
    }
    hasAll(collection) {
        return this.buildHasExpression("hasAll", collection);
    }
    hasAny(list) {
        return this.buildHasExpression("hasAny", list);
    }
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
        else {
            expression.push(list);
        }
        expression.push(RulesExpression_1.RulesExpression.l `)`);
        return new RulesBoolean_1.RulesBoolean(new RulesExpression_1.RulesExpression(expression));
    }
}
exports.RulesSet = RulesSet;
//# sourceMappingURL=RulesSet.js.map