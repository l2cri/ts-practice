// Оператор типа typeof
const s = 'привет'
let n: typeof s
// n: string

// ReturnType
type Predicate = (x: unknown) => boolean
type K = ReturnType<Predicate>
// type K = boolean

// Ошибка
function f() {
    return { x: 10, y: 20 }
}

type P = ReturnType<f>
// f является ссылкой на значение но используется как тип. Возможно вы имели 'typeof f'
type R = ReturnType<typeof f>
// R: { x: number, y: number }

function msgBox(mes: string): boolean {
    return Math.random() > 0.5
}

// Ограничения

// Должны были использовать ReturnType<typeof msgBox> но вместо этого написали
const shouldContinue: typeof msgBox('Вы уверены, что хотите продолжить ?')
// ',' expected

// Типы доступа по индексу (indexed access types)

type Person = { age: number; name: string; alive: boolean }
type Age = Person['age']
// type Age = number

type I1 = Person['age' | 'name']
// type I1 = string | number

type I2 = Person[keyof Person]
// type I2 = number | string | boolean

type AliveOrName = 'alive' | 'name'
type I3 = Person[AliveOrName]
// type I3 = boolean | string

// Несуществующий тип
type IErr = Person['alve']
// свойство alve не существует в типе Person

// Использование number для получения типов элементов массива. typeof для перехвата типа
const MyArray = [
    { name: 'Alice', age: 15 },
    { name: 'Bob', age: 23 },
    { name: 'John', age: 38 },
]

type Person2 = typeof MyArray[number]
// type Person2 = { name: string ,age: number}

type Age2 = typeof MyArray[number]['age']
// type Age2 = number

// или
type Age4 = Person['age']
// type Age4 = number

// Нельзя использовать const чтобы сослаться на переменную
const key2 = 'age'
type Age3 = Person[key2]
// тип key2 не может быть использован в качестве индекса

type key3 = 'age'
type Age5 = Person[key3]

export {}