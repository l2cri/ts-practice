// Оставшиеся параметры (rest parameters)

function multiply(n: number, ...m: number[]) {
    return m.map((x) => n * x)
}

const a = multiply(10, 1, 2, 3, 4);

// Оставштеся аргуметы (rest arguments)

const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]

arr1.push(...arr2)

const args1 = [8, 5]
const angle1 = Math.atan2(...args1)
// ожидалось 2 но получено 0 или более

const args = [8, 5] as const
const angle = Math.atan2(...args)


// Деконструкция параметров (parameters deconstruction)
type ABC = { a: number, b: number, c: number }
function sum({ a, b, c }: ABC) {
    console.log(a + b + c)
}


// Возможность присвоения функций переменным

type voidFn = () => void

const f1: voidFn = () => {
    return true
}

const f2: voidFn = () => true

const f3: voidFn = function () {
    return true
}

const v1 = f1();
const v2 = f2();
const v3 = f3();

//  valid несмотря на то что forEach ждет void, а Array.prototype.push возвращает число
const src = [1, 2 , 3]
const dist = [0]
src.forEach((el) => dist.push(el))

// Ошибка при литеральном определении функции

function someThing(): void {
    return true
}

const f4 = function (): void {
    return true
} 

export {}