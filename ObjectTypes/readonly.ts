
// Свойства, доступные только для чтения (readonly property)
interface SomeType {
    readonly prop: string
}

function doSomething(obj: SomeType) {
    // мы можем читать (извлекать значение) из obj.prop
    console.log(`prop has the value '${obj.prop}'.`)

    // но не можем изменять значение данного свойства
    obj.prop = 'Hello'
    // не возможно присвоить значение prop поскольку оно является доступным только для чтения
}

// Сохранение иммутабельности
interface Home {
    readonly resident: { name: string; age: number }
}

function visitForBirthday(home: Home) {
    //  Мы можем читать т обновлять свойство 'home.resident'
    console.log(`С Днем рождения ${home.resident.age}!`)
    home.resident.age++
}

function evict(home: Home) {
    // Но мы не можем изменять свойство  'home.resident'
    home.resident = { name: 'Victor Evictor', age: 42 }
    // не возможно присвоить значение resident поскольку оно является доступным только для чтения
}

// Не происходит проверки типов на доступность только на чтение
interface Person {
    name: string
    age: number
}

interface ReadonlyPerson {
    readonly name: string
    readonly age: number
}

let writablePerson: Person = {
    name: 'John Smith',
    age: 42
}

//работает присвоение одного типа к другому Без учета чтения они одинаковые 
let readonlyPerson: ReadonlyPerson = writablePerson

console.log(readonlyPerson.age) // 42
writablePerson.age++
console.log(readonlyPerson.age) // 43

readonlyPerson.age++; // ошибка !!!

export {}