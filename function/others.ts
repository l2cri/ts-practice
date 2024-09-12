// Предполагается типом является void
function noop() {
    return
}

// void != undefined
function noop1() {
    // ...
    return undefined
}

// type {}
function someObj() {
    return {}
}

// type object
function someObj1(): object {
    return Math.random() > 0.5 ? { foo: 'foo'} : { bar: 'bar'}
}

// type Object
function someObj2() {
    return new Object()
}

function f1(a: any) {
    a = a + 3
    a = a + '3'
    a.b() // OK
}

// # unknown

function f2(a: unknown) {
    a = a + '3'
    // типом объета является unknown
    a = a + 3
    a.b();
};

//
function safeParse(s: string): unknown {
    return JSON.parse(s)
}

const obj1 = safeParse('asdasd');
obj1?.admin;
obj1?.toString();

// # Never

function fail(msg: string): never {
    throw new Error(msg)
}

const f98 = fail('test');

function fn98(x: string | number) {
    if (typeof x === 'string') {
        // ..
        x; // x parameter string
    } else if (typeof x === 'number') {
        // ...
        x; // x parameter number
    } else {
        // ..
        x; // x parameter never
    }
}

// # Function
function doSomething1(f: Function) {
    f(1, 2, 3)
}

function doSomething2(f: () => void) {
    f()
}

export {}