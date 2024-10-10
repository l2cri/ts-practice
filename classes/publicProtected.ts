// Видимость членов (member visibility)

//public (default)
class Greeter {
    public greet() {
        console.log('Привет!')
    }
}

const g = new Greeter()
g.greet()

// protected
class GreeterProtected {
    public greet() {
        console.log('Привет ' + this.getName())
    }
    protected getName() {
        return 'народ'
    }
}

class SpecialGreeter extends GreeterProtected {
    public howdy() {
        // тут защищенный член доступен
        console.log('Здорово, ' + this.getName())

    }
}

const g1 = new SpecialGreeter()
g1.greet() // OK
g1.getName() 
// свойство является защищенным. можно использовать только в классе Greeter и его подклассах

// Раскрытие защищенных членов
class Base {
    protected m = 10
}

class Derived extends Base {
    // модификатор отсутствует поэтому по умолчанию является public
    m = 15
}

const d = new Derived()
console.log(d.m) // OK

// Доступ к защищенным членам за пределами иерархии классов
class Base1 {
    protected x: number = 1
}

class Derived1 extends Base1 {
    protected x: number = 5
}

class Derived2 extends Base1 {
    f1(other: Derived2) {
        other.x = 10
    }
    f2(other: Base) {
        other.x = 10
       // свойство является защищенным. можно использовать только в классе Greeter и его подклассах
    }
}


export {}