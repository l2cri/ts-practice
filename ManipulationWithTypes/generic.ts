// Манипуляции с типами

// Дженерики
function identity(arg: number): number {
    return arg
}

// универсальная
function identity2(arg: any): any {
    return arg
}

// общие функции
function identity3<Type>(arg: Type): Type {
    return arg
} 

const output = identity3<string>('myString')
// let output: string

// Делегирование типизации компилятору
const output2 = identity3('myString')
// let output: string