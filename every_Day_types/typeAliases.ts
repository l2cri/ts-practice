type Point = {
    x: number
    y: number
}


function printCoords(pt: Point) {
    console.log(`Значение координаты x: ${pt.x}`);
    console.log(`Значение координаты y: ${pt.y}`);
}

type ID = string | number

type UserInputSanitizedString = string

function sanitaze(str: string): string {
    return str;
} 
function getInput(): string {
    return 'some body'
}

function sanitizeInput(str: string): UserInputSanitizedString {
    return sanitaze(str);
}

//  Создаем обезвреженный инпут
let userInput = sanitizeInput(getInput());

// По прежднему имеем возможность изменять значение переменной
userInput = 'new input';

type Animal {
    name: string
}

type Bear = Animal & {
    honey: true
}

function getBear(): Bear {
    return { name: 'Bear', honey: true }
}

const bear = getBear();
bear.name
bear.honey

type Window {
    title: string
}

type Window {
    ts: TypeScriptAPI
}

// Ошибка, повторяющийся тип Window

const myCanvas = document.getElementById('main_canvas') as HTMLCanvasElement

const myCanvas2 = <HTMLCanvasElement>document.getElementById('main_canvas')

// преобразование типа 'string' в 'number' может быть ошибкой, поскольку эти типы не перекрываются
const y = 'hello' as number

// Приведение к любому типу
const x = 'hello' as any as number

export {}