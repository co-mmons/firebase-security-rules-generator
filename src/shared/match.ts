import {InternalMatchTypeConstructor, InternalRulesPathVar, InternalRulesType} from "../internal";
import {RulesType} from "./RulesType";

export function match<C extends {new(...args:any[]): {}}>(path: string) {

    return function(classConstructor: C): any {
        const internalConstructor: InternalMatchTypeConstructor = classConstructor;

        internalConstructor.__rulesMatchPath = path;

        return class extends classConstructor {

            constructor(...args: any[]) {
                super();

                const thiz: any = this;

                for (const propertyName in thiz) {

                    const propertyValue: any = thiz[propertyName];
                    if (!propertyValue) {
                        continue;
                    }

                    if ((propertyValue as InternalRulesPathVar).__rulesPathVar) {
                        if (!(propertyValue as InternalRulesPathVar).__rulesPathVarName) {
                            (thiz[propertyName] as InternalRulesPathVar).__rulesPathVarName = propertyName;
                        }
                    }

                    if (propertyValue instanceof RulesType) {
                        (propertyValue as any as InternalRulesType).__rulesAccessorName = propertyName;
                    }

                }
            }
        }
    }
}
