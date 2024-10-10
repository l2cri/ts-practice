// Private не доступны в подклассах
class Base {
    private x = 0
}
const b = new  Base()
// снаружи класса нельзя получить
console.log(b.x)

class Derived extends Base {
    showX () {
        // в подклассе получить доступ нельзя
        console.log(this.x)
        // property x приватное и доступ еть только в классе Base

    }
}

//  Невозможно менять видимость приватных в производных классах
 class BaseP {
    private x = 0
 }

 class DerivedP extends BaseP {
    // класс DerivedP  неправильно расширяет класс BaseP 
    // свойство x является частным в типе BaseP но не в типе DerivedP
    x = 1
 }

 // Доступ к защищенным членам между экземплярами 
 class A {
    private x = 10 

    public sameAs(other: A) {
        // ошибки не возникает
        return other.x === this.x
    }
 }

 // Предостережение в файле js доступ сохраняется
 class MySafe {
    private secretKey = 12345
 }

 // в  JS файле ...
 const s = new MySafe()
 // Вывод 12345
 console.log(s.secretKey)