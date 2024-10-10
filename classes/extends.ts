// класс extends
class Animal {
    move() {
        console.log('Moving along!')
    }
}

class Dog extends Animal {
    woof(times: number) {
        for (let i = 0; i < times; i++) {
            console.log('woof!')
        }
    }
}

const d = new Dog()
// вызов дочернего 
d.move()
// метод производного класса
d.woof(3)

// перезапись методов
class Base {
    greet() {
        console.log('Привет, народ!')
    }
}

class Derived extends Base {
    greet(name?: string) { // допустим только опциональный параметр
        if (name === undefined) {
            super.greet()
        } else {
            console.log(`Привет, ${name.toLowerCase()}`)
        }
    }
}

const der = new Derived()
der.greet()
der.greet('читатель!')

// Создавать синоним для производного экземпляра с помощью ссылки на базовый класс
const b: Base = der
b.greet()
// b.greet('dsdfds') // not ok (

// Порядок инициализации

class Base1 {
    name = 'базовый'
    constructor() {
        console.log('Меня зовут' + this.name)
    }
}

class Derived1 extends Base1 {
    name = 'производный'
}

// вывод 'базовый'  а не "производный"
const d1 = new Derived1()
// в конструкторе выводятся только базовые поля. Не производные

// Наследование встроенных типов
class MsgError extends Error {
    constructor(m: string) {
        super(m)
    }

    sayHello() {
        return 'Привет ' + this.message
    }
}

// class ParentMsgError extends MsgError {
//     constructor(m?: string) {
//         if (m !== undefined){
//             super(m)
//         }
//     }
// }

// const parentMsg = new ParentMsgError()
const msg = new MsgError('test')

console.log(msg instanceof MsgError) // false
//console.log(parentMsg instanceof MsgError) // true
// Привет undefined
//console.log(parentMsg.sayHello())
console.log(msg.sayHello()) // sayHello is not function !!! если target < es2015

class MsgErrorFix extends Error {
    constructor(m: string) {
        super(m)
        // явно устанавливаем прототип
        Object.setPrototypeOf(this, MsgErrorFix.prototype)
        // extends.ts:97:16 - error TS2550: Property 'setPrototypeOf' does not exist on type 'ObjectConstructor'. 
        // Do you need to change your target library? Try changing the 'lib' compiler option to 'es2015' or later.

    }

    sayHello() {
        return 'Привет ' + this.message
    }
}

// class ParentMsgErrorFix extends MsgErrorFix {
//     constructor(m?: string) {
//         if (m !== undefined){
//             super(m)
//         }
//     }
// }

// const parentMsgFix = new ParentMsgErrorFix()
const msgFix = new MsgErrorFix('test')

console.log(msgFix instanceof MsgErrorFix) // true
// console.log(parentMsgFix instanceof MsgErrorFix) // true

// console.log(parentMsgFix.sayHello())
console.log(msgFix.sayHello()) // sayHello is not function !!!

export {}
