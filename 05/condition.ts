// 1
type MyNonNullable<T> = {
    [K in keyof T as T[K] extends null | undefined ? never : K]: T[K];
};
// 2
type IsFunction<T> = T extends Function ? true :  false
// 3

type Nullable1 = {
    a: string;
    b: number | null;
    c: null;
    e?: string;
    f: undefined;
}

type Test1 = MyNonNullable<Nullable1>;

let test1: Test1 = {
    a: "Hello",
    b: null,
    e: "Optional string"
    // Свойства `b`, `c` и `f` были удалены
};


type MyFunction = () => void

let isFunction: IsFunction<MyFunction>
let isNotFunction: IsFunction<Nullable1>

type MyNonNullable2<T> = {
    [K in keyof T]: Exclude<T[K], null | undefined>;
};

interface User23 {
    id: number | null;
    name: string | undefined;
    email: string | null;
    role?: string | null;
}

type NonNullableUser = MyNonNullable2<User23>;

let user1: NonNullableUser = {
    id: 1,               // null исключён
    name: "John",         // undefined исключён
    email: "john@example.com",
    role: "admin"         // null исключён
};

export {}