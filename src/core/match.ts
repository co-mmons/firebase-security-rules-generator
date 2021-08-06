import {InternalMatchConstructor, InternalRulesPathVar, InternalRulesValue} from "../internal";
import {RulesValue} from "./RulesValue";

export function match<C extends {new(...args:any[]): {}}>(path: string) {

    return function(classConstructor: C): any {
        const internalConstructor: InternalMatchConstructor = classConstructor;

        internalConstructor.__rulesMatchPath = path;

        return class extends classConstructor {

            constructor(...args: any[]) {
                super();

                const thiz: Partial<InternalRulesValue> = this;
                thiz.__rulesAccessorName = "resource.data";

                for (const propertyName in thiz) {

                    const propertyValue: any = thiz[propertyName];
                    if (!propertyValue) {
                        continue;
                    }

                    if ((propertyValue as InternalRulesPathVar).__rulesPathVar) {

                        if (!(propertyValue as InternalRulesValue).__rulesAccessorName) {
                            (thiz[propertyName] as InternalRulesValue).__rulesAccessorName = propertyName;
                        }

                    } else if (propertyValue instanceof RulesValue) {
                        (propertyValue as any as InternalRulesValue).__rulesAccessorName = propertyName;
                        (propertyValue as any as InternalRulesValue).__rulesAccessorContext = "resource.data";
                    }

                }
            }
        }
    }
}
