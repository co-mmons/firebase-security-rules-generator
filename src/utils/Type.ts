/**
 * Represents a type that object is instances of.
 *
 * An example of a `Type` is `MyCustomObject` class, which in JavaScript is be represented by
 * the `MyCustomObject` constructor function.
 */
export interface FunctionConstructor {

    /**
     * Creates a new function.
     * @param args A list of arguments the function accepts.
     */
    new(...args: string[]): Function;
    (...args: string[]): Function;
    readonly prototype: Function;
}

export const Type: FunctionConstructor = Function;

export interface Type<T> extends Function {
    new?(...args: any[]): T;
    readonly prototype: T;
}

export const AssignableType: FunctionConstructor = Function;

export interface AssignableType<T> extends Function {
    new(...args: any[]): T;
}
