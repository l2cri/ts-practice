// tsc --noEmitOnError
function greet(person: string, date: Date) {
    console.log(`Hello ${person}! Today is ${date.toDateString()}`)
}

greet('John', new Date())   

export {}