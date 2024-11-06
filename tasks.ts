// Partial
type MyPartial<T> = {
    [K in keyof T]?: T[K]
}

const a: `${number}.${number}.${number}` = '12.12.12' // 3 цифры разделенные точкой
const b: `${number} ${Currency}` = '100 $' // цифра пробел доллар

// Object -> 10, Array -> 20. Cond Types
// https://www.typescriptlang.org/docs/handbook/2/conditional-types.html
type MyType<T>  = T extends object ? 10 : T extends unknown[] ? 20 : never;

function myFunc<T>(arg: T): T extends object ? 10 : T extends unknown[] ? never : boolean;
function myFunc2(arg: object | unknown[]): 10 | 20;

// *, infer, Params<T>

const a = (a: string) => 1;
// c 4 версии Params<typeof a>

type MyType2<T> = T extends (arg: infer C) => unknown ? C : never;
type MyType3<T> = T extends (arg: unknown) => infer C ? C : never;

type MyType4<T> = T extends [infer C, ...val] ? C : never;