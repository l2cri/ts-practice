// Члены класса (class members)
class Point {
    x: number
    y: number
}

const pt = new Point()

pt.x = 0
pt.y = 0

// инициализация по умолчанию
class Point2 {
    x = 0
    y = 0
}

const pt2 = new Point2()

// 0, 0
console.log(pt2.x, pt2.y)
pt.x = '0'
// Тип string не может быть присвоен типу number

// strictPropertyInitialization поля в конструкторе
class BadGreeter {
    name: string
    // Свойство name не имеет инициализации и ему не присваивается значение в конструкторе
}

// поля в конструкторе а не методы 
class NotGoodGreeter {
    name: string

    constructor() {
        this.setName()
    }

    setName () {
        this.name = 'привет'
    }
}

class GoodGreeter {
    name: string

    constructor() {
        this.name = 'привет'
    }
}

// Если инициализация вне конструктора
class SomeOkGreeter {
    // не инициализируется, но ошибки не возникает
    name!: string
}


// readonly
class ReadonlyGreeter {
    readonly name: string = 'народ'

    constructor(otherName?: string) {
        if (otherName !== undefined) {
            this.name = otherName
        }
    }

    err() {
        this.name = 'не ок'
        // не возможно присвоить значение свойству name поскольку оно является доступным только для чтения
    }
}

const g = new ReadonlyGreeter()
g.name = 'тоже не ок'

export {}