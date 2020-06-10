import "reflect-metadata";
import {InternalMatchTypeConstructor} from "../internal";

export function func() {

    return function (targetClass: any, functionName: string, descriptor: PropertyDescriptor) {

        const classConstructor: InternalMatchTypeConstructor = targetClass.constructor;
        const originalFunction: Function = descriptor.value;

        const argsTypes: any[] = Reflect.getMetadata("design:paramtypes", targetClass, functionName);
        const args = argsTypes.map(arg => new arg());
        const argsNames = originalFunction.toString()
            .match(/\(\s*([^)]+?)\s*\)/)
            .map((v, i) => i === 1 ? v.split(",").map(v => v.trim()) : v)
            .find((value, index) => index == 1) as string[];

        const newFunction = function () {
            for (let i = 0; i < arguments.length; i++) {
                // if (argName.length > i && arguments[i] instanceof RulesType) {
                // }
            }

            return originalFunction.call(this, ...arguments);
        }

        descriptor.value = newFunction;

        if (!classConstructor.__rulesMatchFunctions) {
            classConstructor.__rulesMatchFunctions = [];
        }

        classConstructor.__rulesMatchFunctions.push({
            name: functionName,
            args: argsNames,
            call: (thiz) => newFunction.apply(thiz, args)
        });
    }
}
