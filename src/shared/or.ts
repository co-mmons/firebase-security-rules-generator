import {Expression} from "./Expression";
import {RulesType} from "./RulesType";

export function or(...parts: Array<Expression | RulesType>) {
    const orrr = [];

    for (let i = 0; i < parts.length; i++) {

        if (i === 0) {
            orrr.push(Expression.l`(`);
        }

        if (i > 0) {
            orrr.push(Expression.l` || `);
        }

        orrr.push(parts[i]);

        if (i === parts.length - 1) {
            orrr.push(Expression.l`)`);
        }
    }

    return new Expression(...orrr);
}
