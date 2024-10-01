// Ограничения дженериков
function loggingIdentity<Type>(arg: Type): Type {
    console.log(arg.length)
    // property length does not exist  an type "Type"
    return arg
}

interface Lengthwise {
    length: number
}

function loggingIdentity2<Type extends Lengthwise>(arg: Type): Type {
    console.log(arg.length)
    return arg
}

loggingIdentity(3)
loggingIdentity2(3) // аргумент типа number не может быть присвоен параметру типа Lengthwise
loggingIdentity2({ length: 2, value: 'test' }) 

// Использование типов параметров в ограничениях дженериков
function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
    return obj[key]
}

const x = { a: 1, b: 2, c: 3, d: 4 }

getProperty(x, 'a')
getProperty(x, 'm') //  аргумент типа m не может быть присвоен параметру типа "a" | "b" | "c" | "d"'.

// Использование типов класса в дженериках
function create<Type>(c: { new (): Type}): Type {
    return new c();
}

//
class BeeKeeper {
    hasMask: boolean
}

class ZooKeeper {
    nameTag: string
}

class Animal {
    numLegs: number
}

class Bee extends Animal {
    keeper: BeeKeeper
}

class Lion extends Animal {
    keeper: ZooKeeper
}

function createInstance<A extends Animal>(c: new () => A): A {
    return new c();
}

createInstance(Lion).keeper.nameTag
createInstance(Bee).keeper.hasMask

export {}