// анонимные
function greet4(person: { name: string; age: number}) {
    return `Привет, ${person.name}!`
}
// c помощью интерфейсов

interface Person {
    name: string
    age: number
}

function greet2(person: Person) {
    return `Привет, ${person.name}!`
}

// с помощью синонимов

type Person1 = {
    name: string
    age: number
}

function greet3(person: Person1) {
    return `Привет, ${person.name}!`
}

// # Модификаторы свойств

interface Shape {
    kind: 'circle' | 'squre'
    radius?: number
    sideLength: number
}

// опциональное ?
interface PaintOptions {
    shape: Shape
    xPos?: number
    yPos?: number
}

function getShape(): Shape {
    return { kind: 'circle', sideLength: 10 }
}

function paintShare(opts: PaintOptions) {
    // ...
}

const shape = getShape()
paintShare({ shape })
paintShare({ shape, xPos: 100 })
paintShare({ shape, yPos: 100 })
paintShare({ shape, xPos: 100, yPos: 100 })

function paintShare2(opts: PaintOptions) {
    let xPos = opts.xPos
    // (property) PaintOptions.xPos?: number | undefined
    

    let yPos = opts.yPos
    // (property) PaintOptions.yPos?: number | undefined
    // ...

    console.log(xPos * yPos)
    // ругается на потенциальный null

    // как улучшить

    let xPos1 = 
    pts.xPos === undefined ? 0 : opts.xPos
    // (property) xPos?: number 

    let yPos1 = opts.yPos === undefined ? 0 : opts.yPos
    // (property) yPos?: number
    // ...

    console.log(xPos1 * yPos1)
}

// значение по умолчанию
function paintShare3({ shape, xPos = 0, yPos = 0}: PaintOptions) {
    console.log(xPos, yPos);
    // xPos: number yPos: number
}

function render(a: any) {
    console.log(a)
}

// Нельзя поместить аннотацию в деструктуризацию
function draw1 ({ shape25: Shape, xPos: number = 100 }) {
    render(shape25)
    //не возможно найти shape25 возможно вы имели ввиду Shape

    render(xPos)
    // невозможно найти xPos
}

export {}