class ArrayAny<T> {
    list: T[]
    
    constructor(items: T[]) {
        this.list = items
    }

    add(item: T) {
        this.list.push(item)
    }
}

class MyBase {
    setProperty(prop:string) {
        //
        console.log(prop)
    }
}

class ExtMy extends MyBase {
    deleteProperty() {
        //
        console.log('delete')
    }
}

interface ICoolObject {
    input:string
    doSomething: (a: string) => number
}

class MyCool implements ICoolObject {
    input: string

    constructor(input:string) {
        this.input = input
    }
    doSomething (a: string)  {
        return Number(a)
    }
}