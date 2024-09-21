// Расширение типов (extending types)

interface BasicAddress {
    name?: string
    street: string
    city: string
    country: string
    postalCode: string
}

interface AddressWithUnits {
    name?: string
    unit: string
    street: string
    city: string
    country: string
    postalCode: string
}

// Более правильный вариант расширения типов

interface BasicAddress {
    name?: string
    street: string
    city: string
    country: string
    postalCode: string
}

interface AddressWithUnits extends BasicAddress {
    unit: string
}


// Указывает на связь с другими типами
interface Colorful {
    color: string
}

interface Circle {
    radius: number
}

interface ColorfulCircle extends Colorful, Circle {}

const cc: ColorfulCircle = {
    color: 'red',
    radius: 10,
}

// Пересечение типов
interface Colorful {
    color: string
}

interface Circle {
    radius: number
}

type ColorfulCircle2 = Colorful & Circle

function draw2(circle: Colorful & Circle) {
    console.log(circle.color)
    console.log(circle.radius)
}


draw2({ color: 'red', radius: 10 })

draw2({ color: 'red', raduis: 10 }) // опечатка

// Общие объектные типы
interface Box {
    contents: unknown
}

let x: Box = {
    contents: 'Привет народ!'
}

// мы можем проверить тип
if (typeof x.contents === 'string') {
    console.log(x.contents.toLowerCase())
}

// или утвердить
console.log((x.contents as string).toLowerCase())

const stringValue = x.contents as string
console.log(stringValue.toLowerCase())

// Разделить типы

interface NumberBox {
    contents: number
}

interface StringBox {
    contents: string
}

interface BooleanBox {
    contents: boolean
}

function setContents(box: StringBox, newContents: string): void
function setContents(box: NumberBox, newContents: number): void
function setContents(box: BooleanBox, newContents: boolean): void
function setContents(box: { contents: any }, newContents: any) {
    box.contents = newContents
}

// как правильно
interface Box3<Type> {
    contents: Type
}

let box: Box3<string>

box = { contents: 'Hello' };
box.contents
// contents string

let box2: Box3<number>

box2 = { contents : 10 }
box2.contents
// contents type number

interface Apple {
    foo: string
    bar: number
}

let boxApple: Box3<Apple>
boxApple = { contents: { foo: 'test', bar: 10 }}

// functions  без перегрузки
function setContentsNew<Type>(box : Box3<Type>, newContents: Type) {
    box.contents = newContents
} 

setContentsNew({ contents: 'test'}, 'addNew')
setContentsNew({ contents: 10}, 20)
setContentsNew({ contents: true}, false)
setContentsNew<Apple>({ contents: { foo: 'test', bar: 10 }}, { foo: 'newContent', bar: 20})


// Синонимы
type orNull<Type> = Type | null
type OneOrMany<Type> = Type | Type[]
type OneOrManyOrNull<Type> = orNull<OneOrMany<Type>>

type OneOrManyOrNullString = OneOrManyOrNull<string>

let a: orNull<number> = 5
a = null

let b: orNull<string>
b = null

let c: OneOrMany<number> 
c = 2
c = [1,2,3]

let d: OneOrManyOrNull<boolean>
d = true
d = null

let e: OneOrManyOrNullString
e = 'test'
e = null

export {}