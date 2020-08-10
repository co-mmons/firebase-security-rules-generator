import {RulesExpression} from "../RulesExpression";
import {RulesString} from "./RulesString";

export function concatExpression(...strings: Array<RulesString | string>) {

    const expressions = [];
    for (let i = 0; i < strings.length; i++) {

        if (i > 0) {
            expressions.push(RulesExpression.l` + `);
        }

        expressions.push(strings[i]);
    }

    return new RulesExpression(RulesExpression.l`(`, ...expressions, RulesExpression.l`)`);
}
