export declare function match<C extends {
    new (...args: any[]): {};
}>(path: string): (classConstructor: C) => any;
