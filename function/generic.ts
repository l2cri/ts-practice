// 1. Используйте типы параметров без ограничений
function firstElement1<Type>(arr: Type[]) {
    return arr[0];
}

function firstElement2<Type extends any[]>(arr: Type) {
    return arr[0];
}

// a: string хорошо!
const a = firstElement1([1, 2, 3])
// b: any плохо!
const b = firstElement2([1, 2, 3])

// 2. Используйте минимальное кол-во типов параметра
function filter1<Type>(
    arr: Type[],
    func: (arg: Type) => boolean
) : Type[]
{
    return arr.filter(func)
}

function filter2<Type, Func extends (arg: Type) => boolean>(
    arr: Type[],
    func: Func
) : Type[]
{
    return arr.filter(func)
}

function predicate(el: any) {
    const num = Number(el);
    return num > 0
}


const c1 = filter1(['1', '2', '3'], predicate)
// второй парамет устанавливает аргументы в зависимости от передаваемых в массиве значений
const c2 = filter1<string | number>(['1', 2, true], predicate)

 
const d = filter2([1, 2, 3], predicate)
// тут жестко прописан . поэтому придется опрелять второй аргумент
const d2 = filter2<string | number, (arg: string | number) => boolean>(['1', 2, true], predicate)


// 3. Типы параметра должны указываться дважды
// Bad !
function greeting<Str extends string>(s: Str) {
    console.log(`Привет ${s}`);
}
// Good !
function greeting2(s: string) {
    console.log(`Привет ${s}`);
}

export {}