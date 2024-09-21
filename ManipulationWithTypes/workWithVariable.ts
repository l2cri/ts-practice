// Работа с переменными типа в дженериках
function  loggingIdentity<Type>(arg: Type): Type {
    console.log(arg.length)
    // length не существует в Type
    return arg
}
// сделаем массивом
function  loggingIdentity2<Type>(arg: Type[]): Type[] {
    console.log(arg.length)
    // length не существует в Type
    return arg
}

type ArrayOrString<Type> = Array<Type>|string

function  loggingIdentity3<Type>(arg: ArrayOrString<Type>): ArrayOrString<Type> {
    console.log(arg.length)
    // length не существует в Type
    return arg
}

// Общие типы
function identity4<Type>(arg: Type): Type {
    return arg
}

const myIdentity: <Input>(arg: Input) => Input = identity4

// общие типы в виде сигнатуры вызова типа объектного литерала
const myIdentity2: { <Type>(arg: Type): Type } = identity4

const a = myIdentity2(4)
const b = myIdentity(4)
// a: 2 b: 2

// Общий интерфейс
interface GenericIdentityFn {
    <Type>(arg: Type): Type
}

const myIdentity3: GenericIdentityFn = identity4
