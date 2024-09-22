// Тип Array 
// number[] => Array<number> 
// string[] => Array<string>

function doSomething(value: Array<string>) {
    // ...
}

let myArray: string[] = ['hello', 'world']

doSomething(myArray)
doSomething(new Array('hello', 'world'))

// интерфейс Array является общим типом
interface Array<T> {
    /**
     *  Получает или устанавливает длину массива
     */
    length: number

    /**
     * Удаляет последний элемент массива и возвращает его
     */
    pop(): T | undefined

    /**
     * Добавляет новые элементы в конец массива и возвращает новую длину массива
     */
    push(...items: T[]): number

    // ...
}

// MAP

let myMap: Map<number, string | number>

// new Map(Iterable) Iterable <K, V>(entries?: readonly (readonly [K, V])[] | null): Map<K, V>;

let defaultValue = [
    [20, 34],
    [17, 34]
] as const // entries объявлена как readonly

// defaultValue.push([34, 455]) // нельзя
myMap = new Map<number, number>(defaultValue) // на конструкторе типы
myMap.set(1, 'test') // тип берется из переменной

type myType = (string|number)[][]

let myIterable: myType = [ [1, 'one'], [2, 'two'] ];

// SET
let mySet: Set<number|string>;

mySet = new Set<number>([1])
mySet.add('test')

// PROMISE
let myPromise: Promise<Apple>| Array<string>

myPromise = Promise.resolve({ foo: 'foo', bar: 10 })

myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() > 0.5) {
            resolve({ foo: 'foo', bar: 10 })
        } else {
            reject(['foo', 1])
        }
        
    })
})

myPromise = Promise.reject('test')

// ReadonlyArray -  readonly Type[]

const roArray: ReadonlyArray<string> = ['red', 'green', 'blue']

function doStaff(values: readonly string[]) {
    const copy = values.slice();
    console.log(values[0])
    values.push('hello') // свойство push не существует в типе 'readonly string[]'
    copy.push('world')
}

// разница

let x: readonly string[] = []
let y: string[] = []

y = x // error тип доступен только для чтения и не может быть присвоен
x = y // ok

// Кортеж (tuple)
type StrNumPair = [string, number]

function doSomething3(pair: [string, number]) {
    const a = pair[0] // string
    const b = pair[1] // number
}

doSomething3(['hello', 42])

// Ошибка превосходящая по длине массива

function doSomething4(pair: [string, number]) {
    const с = pair[2] // длинна массива 2 .не имеет элемента с индексом 2 
}

// Деструктурирование кортежей
function doSomething5(pair: [string, number]) {
    const [ inputString, hash ] = pair
    console.log(inputString) // string
    console.log(hash) // number
}


interface StringNumberPairs {
    // конкретное свойство
    length: 2
    0: string
    1: number
    
    // Другие поля 'Array<string|number>'
    slice(start?: number, end?: number): Array<string|number>
}

// Опциональные элементы кортежа
type Either2DOr3D = [number, number, number?]

function setCoords(coords: Either2DOr3D) {
    const  [x, y, z] = coords
    // const z: number | undefined

    console.log(`
        Переданы координаты в  ${coords.length} направлениях    
    `)
    // (property) length: 2|3
}

// Оставшиеся элементы кортежа
type StringNumberBooleans = [string, number, ...boolean[]]
type StringBooleansNumber = [string, ...boolean[], number]
type BooleansStringNumber = [...boolean[], string, number]

function readButtonInput(...args: [ string, number, ...boolean[]]) {
    const [name, version, ...input] = args
    // name: string, version: number, input: boolean[]
    args.length
    // length: number
}
// Эквивалентно
function readButtonInputE(name: string, version: number, ...input: boolean[]) {
    // ...
}

// Кортежи доступные только для чтения
function doSomethingReadOnly(pair: readonly [string, number]) {
    pair[0] = 'hello'
    // нельзя присвоить к 0 индексу потому что свойство только на чтение 
}

// Кортежи работа с const
let point = [3, 4] as const

function distanceFromOrigin([x, y]: [number, number]) {
    return Math.sqrt(x**2 + y**2)
}

distanceFromOrigin(point)
// Тип 'readonly [3, 4]' не совместим с типом  '[number, number]'
// поскольку не может гарантировать иммутабельность

function distanceFromOrigin2([x, y]: readonly [number, number]) {
    return Math.sqrt(x**2 + y**2)
}

distanceFromOrigin2(point) // OK

export {}
