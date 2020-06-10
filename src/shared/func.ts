import {InternalMatchTypeConstructor} from "../internal";
import {RulesType} from "./RulesType";
import "reflect-metadata";

export function func(...argName: string[]) {

    return function (targetClass: any, functionName: string, descriptor: PropertyDescriptor) {

        const classConstructor: InternalMatchTypeConstructor = targetClass.constructor;
        const originalFunction: Function = descriptor.value;

        const newFunction = function() {
            for (const arg of arguments) {
                if (arg instanceof RulesType) {
                    arg["__rules_context"] = undefined;
                }
            }

            return originalFunction(...arguments);
        }

        descriptor.value = newFunction;

        const argsTypes = Reflect.getMetadata("design:paramtypes", targetClass, functionName);
        const args = [];

        for (const arg of argsTypes) {
            args.push(new arg());
        }

        if (!classConstructor.__rulesMatchFunctions) {
            classConstructor.__rulesMatchFunctions = [];
        }

        classConstructor.__rulesMatchFunctions.push({
            name: functionName,
            args: argName,
            call: (thiz) => newFunction.call(thiz, ...args)
        });
    }
}
