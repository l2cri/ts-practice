// Конструкторы похожи на функции
class Point {
    x: number
    y: number

    // обычная сигнатура
    constructor(x = 0, y = 0) {
        this.x = x
        this.y = y
    }
}

class Point2 {
    x: number
    y: number

    // перегрузки
    constructor(x: number, y: string)
    constructor(s: string)
    constructor(xs: any, y?: any) {
        // ...
    }
}

// super
class Base {
    k = 4
}

class Derived extends Base {
    constructor() {
        // в es5 выводится неправильное значение в es6 выбрасывается исключение
        console.log(this.k)
        // перед доступом к this в конструкторе должен быть вызван super
        super()
    }
}