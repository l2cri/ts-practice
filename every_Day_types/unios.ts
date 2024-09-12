function printId(id: number | string) {
    console.log(`Ваш ID: ${id}`)
}

// OK
printId(1);

// OK
printId('1')

// Ошибка
printId({ myID: 1})

// Argument of  type { myID: number } is not assignable to parameter of type string | number

export {}