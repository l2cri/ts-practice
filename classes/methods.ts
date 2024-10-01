// Методы 
class Point {
    x = 10
    y = 10

    scale(n: number): void {
        this.x *= n
        this.y *= n
    }
}

let x: number = 0

// Обращаем внимание на this
class C {
    x: string = 'привет'

    m() {
        x = 'world'
        // type x нельзя присвоить к типу number
        this.x = 'world' // OK
    }
}

// # Геттеры и сеттеры
class C1 {
    _length =  0
    get length() {
        return this._length
    }
    set length(value) { // type string на основе возвращаемого типа get
        this._length = value
    }
}

const c1 = new C1()
c1.length
c1.length = 10

class C2 {
    _length =  0
    get length() {
        return this._length
    }
}
const c2 = new C2
console.log(c2.length)
c2.length = 10 // readonly так как нету set 

export {}
