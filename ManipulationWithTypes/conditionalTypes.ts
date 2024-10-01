// Условные типы (conditionals types)
 interface Animal {
    live(): void
 }
 interface Dog extends Animal {
    woof(): void
 }

 type Example1 = Dog extends Animal ? number : string
 // type Example1 = number

 type Example2 = RegExp extends Animal ? number : string
 // type Example2 = string

 // SomeType extends OtherType ? TrueType : FalseType

 interface IdLabel {
    id: number /* некоторые поля */
 }

 interface NameLabel {
    name: string /* другие поля */
 }

function createLabel(id: number): IdLabel
function createLabel(name: string): NameLabel
function createLabel(nameOrId: string | number): IdLabel | NameLabel {
  throw 'не реализовано'
}

// Вместо этого
type nameOrId<T extends number | string> = T extends number ? IdLabel : NameLabel

// Избавление от перегрузок
function bestCreateLabel<T extends number | string>(idOrName: T): nameOrId<T> {
    throw 'не реализовано'
}

let a1 = bestCreateLabel('javascript')
// let a1: NameLabel

let b1 = bestCreateLabel(2.8)
// let b1: IdLabel

let c1 = bestCreateLabel(Math.random() ? 'hello' : 42)
// let c1: nameLabel | IdLabel

// Ограничения условных типов
type MessageOf<T> = T['message']
// тип message не может быть использован для индексации типа T

//  Введем ограничения
type MessageOf2<T extends { message: unknown }> = T['message']

interface Email {
    message: string
}

interface Dog {
    bark(): void
}

type EmailContents = MessageOf2<Email>
// type EmailContents: string

// Дефолтный тип

type MessageOf3<T> = T extends { message: unknown } ? T['message'] : never
interface Email {
    message: string
}

interface Dog {
    bark(): void
}

type EmailMessageContent = MessageOf3<Email>
// type EmailMessageContent: string

type DogMessageContent = MessageOf3<Dog>
// type DogMessageContent: never

let af: DogMessageContent
// af: type never

type Flatten<T> = T extends any[] ? T[number] : T

// Извлекает тип элемента
type Str = Flatten<string[]>
// type Str: str

// сохраняет тип
type Num = Flatten<number>
// type Num: number

/// Предположения в уловных типах infer
type Flatten2<Type> = Type extends Array<infer Item> ? Item : Type
// создает новый дженерик  Item вместо извлечение T в отдельную ветку 
type Str1 = Flatten2<number[]>

// вспомогательные синонимы типа
type GetReturnType<Type> = Type extends (...args:never[]) => infer Return ? Return : never
type Num1 = GetReturnType<() => number>
// type Num1: number

type Str2 = GetReturnType<(x: string) => string>
// type Str2: string

type Booleans = GetReturnType<(a: boolean, b: boolean) => boolean[]>
// type Booleans: boolean[]

// Несколько сигнатур вызова на основе последней
declare function stringOrNum(x: string): number
declare function stringOrNum(x: number): string
declare function stringOrNum(x: string | number): string | number

type T1 = ReturnType<typeof stringOrNum>
// type T1 = string | number


// Распределенные условные типы (distributive conditional types)
type ToArray<Type> = Type extends any ? Type[] : never

type StrArrOrNumArr = ToArray<string | number>
// type StrArrOrNumArr: string[] | number[]
let ar1: StrArrOrNumArr = [1, 2]
ar1 = ['foo', 'bar']
ar1 = [1, 'fo'] // bad

//  для распределения 
type ToArray2<Type> = [Type] extends [any] ? Type[] : never

type StrArrOrNumArr2 = ToArray2<string | number>
// type StrArrOrNumArr: {string | number)[]

let ar2: StrArrOrNumArr2 = [1, 2]
ar2 = ['foo', 'bar']
ar2 = [1, 'fo'] // ok 

export {}
