// Классы и наследования

interface PingAble {
    ping(): void
}

class Sonar implements PingAble {
    ping() {
        console.log('ping')
    }
}

class Ball implements PingAble {
    // Класс Ball не корректно реализует интерфейс PingAble Свойство ping отсутствует и является обязательным
    pong () {
        console.log('pong')
    }
}

// class C implements A, B {}

interface CheckAble {
    check(name: string): boolean
}

class NameChecker implements CheckAble {
    check(s) {
        // s type any не соблюдает имплементацию name: string
        return s.toLowerCase() === 'ok'
    }
}

// Определение опционального свойства не приводит к созданию  такого свойства
interface A {
    x: number
    y?: number
} 

class C implements A {
    x = 0
    // y = 10 
}
const c = new C()
c.y = 10
// свойство y не существует в типе С