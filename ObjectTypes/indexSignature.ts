interface StringArray {
    [index: number]: string
}

const myArray: StringArray = getStringArray()
const secondItem = myArray[1]
// secondItem имеет тип string

// # Строковый и числовой индекс
interface Animal {
    name: string
}

interface Dog {
    breed: string
}

// Ошибка: индексация с помощью числовой строки может привести к созданию другого типа Animal 
interface NotOkay {
    [x: number]: Animal
    // Числовой тип Animal не может быть присвоен строковому типу Dog
    [x: string]: Dog
}

// нельзя смешивать несколько типов в индексе массива и других свойств
interface NumberDictionary {
    [index: string]: number
    length: number // OK
    
    name: string // свойство name не может быть присвоено строковому индексу типа number
}

// можно
interface NumberOrStringDictionary {
    [index: string]: number | string
    length: number // OK
    
    name: string // ok 
}

// индексы только для чтения
interface ReadonlyStringArray {
    readonly [index: number]: string
}

let myArray2: ReadonlyStringArray = getReadonlyStringArray()
myArray2[2] = 'John'
// Сигнатура индекса в типе ReadonlyStringArray допускает только чтение

export {}
 