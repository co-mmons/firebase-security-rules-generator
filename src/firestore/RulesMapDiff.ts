import {RulesExpression} from "../core/RulesExpression";
import {RulesMap as $Map} from "../core/RulesMap";
import {InternalRulesValue} from "../internal";
import {AssignableType} from "../utils/Type";
import {RulesBoolean} from "./RulesBoolean";
import {RulesList} from "./RulesList";
import {RulesSet} from "./RulesSet";
import {RulesString} from "./RulesString";
import {RulesValue} from "./RulesValue";

/**
 * Map type, used for simple key-value mappings.
 *
 * {@link https://firebase.google.com/docs/reference/rules/rules.MapDiff}
 */
export class RulesMapDiff extends RulesValue {

    addedKeys(): RulesSet<RulesString> {
        return new RulesSet(new RulesExpression(this, RulesExpression.l`.addedKeys()`), RulesString);
    }

    affectedKeys(): RulesSet<RulesString> {
        return new RulesSet(new RulesExpression(this, RulesExpression.l`.affectedKeys()`), RulesString);
    }

    changedKeys(): RulesSet<RulesString> {
        return new RulesSet(new RulesExpression(this, RulesExpression.l`.changedKeys()`), RulesString);
    }

    addedOrChangedKeys(): RulesSet<RulesString> {
        return new RulesSet(new RulesExpression(RulesExpression.l`__MapDiff_addedOrChangedKeys(`, this, RulesExpression.l`)`), RulesString);
    }

    removedKeys(): RulesSet<RulesString> {
        return new RulesSet(new RulesExpression(this, RulesExpression.l`.removedKeys()`), RulesString);
    }

    unchangedKeys(): RulesSet<RulesString> {
        return new RulesSet(new RulesExpression(this, RulesExpression.l`.unchangedKeys()`), RulesString);
    }

}
