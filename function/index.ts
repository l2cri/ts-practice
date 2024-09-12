// Функции в форме выражения (function type expression)


function greeter (fn: (a: string) => void) {
    fn('Hello World')
}

function printConsole(s: string) {
    console.log(s)
}

greeter(printConsole);
// Синоним
type Greeter = (a: string) => void
function greeter2(fn: Greeter) {
    //...
}


// Сигнатура вызова (call signature)
type DescFn = {
    description: string
    (someArg: number): boolean
}
function doSomething (fn: DescFn) {
    console.log(`Значение, возвращаемое ${fn.description} является ${fn(6)}`)
}

// Сигнатура конструктора (constract signatures)
interface SomeObject {
    id: number
    name: string
}
type SomeConstructor = {
    new (s: string): SomeObject
}
function fn(ctor: SomeConstructor) {
    return new ctor('Hello world!');
}

// Без конструктора и с конструктором
interface CallOrConstract {
    new (s: string): Date
    (n?: number): number
}
function superPuper(fn: CallOrConstract) {
    fn();
    fn(1)

    return new fn('tomorrow')
}

// Общие функции или функции дженерики
function firstElement(arr: any[]) {
    return arr[0];
}

function firstGenericElement<Type>
                        (arr: Type[]):
                        Type {
                            return arr[0];
                        }

const s = firstGenericElement([1,2,3])  
// s имеет тип number из параметра массив  
const n = firstGenericElement([1, '2', true])
// n имеет тип string | number | boolean


//  Предположение типа 
function map<Input, Output>(
    arr: Input[],
    func: (arg: Input) => Output 
): Output[] 
{
    return arr.map(func);
}

const parsed = map([1 , 2 , 3], (n) => parseInt(n + ''))
// Типом  n Является  string 
// а потом 'parsed' - number []
const parsed2 = map(['1', '2', '3'], (n) => parseInt(n))



// Ограничения
function longest<Type extends { length: number}>
(a: Type, b: Type) 
{
    if (a.length > b.length) {
        return a
    } else {
        return b
    }
}

const longerArr = longest([1, 2], [1, 2, 3]);
// longerArr - тип number[]

const longerStr = longest('alice', 'bob');
// longerStr - тип  'alice' | 'bob'

const notOk = longest(10, 100)
// аргументу типа number не может быть присвоен параметру типа { length: number }


//  Работа с ограниченными значениями
 
function minLength<Type extends { length: number}>(
    obj: Type,
    min: number
): Type
{
    if (obj.length >= min) {
        return obj
    } else {
        // Тип { length: min } не может быть пррисвоен типу Type.
        return { length: min }
    }
}

// Определение параметров типа
function combine<Type>(arr1: Type[], arr2: Type[]): Type[] {
    return arr1.concat(arr2);
}

const arr = combine([1,2,3], ['hello'])
// type string is not assignable to type number
const arr2 = combine<string | number>([1,2,3], ['hello'])

export {}