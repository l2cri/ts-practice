type MyNonNullable<T> = {
    [K in keyof T as T[K] extends null | undefined ? never : K]: T[K];
};

interface Nullable1 {
    a: string;
    b: number | null;
    c: null;
    e?: string;
    f: undefined;
}

type NonNullable2 = MyNonNullable<Nullable1>;

let test1: NonNullable2 = {
    a: "Hello",      // `a` остаётся string
    b: 42,           // `null` исключён, оставили только number
    e: "Optional"    // `e` остался опциональным (без `undefined`)
    // c и f больше нет, так как их типы были `null` и `undefined`
};

export {}