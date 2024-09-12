function makeDate(timestamp: number): Date // 1
function makeDate(d: number, m: number, y: number): Date // 2
function makeDate(d: number, m: number): Date // 2
function makeDate(dOrTimestamp: number, m?: number, y?: number ): Date // 3
{
    if (m !== undefined && y !== undefined) {
        console.log('2')
        return new Date(y, m, dOrTimestamp);
    } 
    else {
        console.log('1 или 3') 
        return new Date(dOrTimestamp);
    }
}

const dr1 = makeDate(12345678)
const dr2 = makeDate(5, 5, 5)
const dr3 = makeDate(1, 3)
// Нет перегрузки, принимающей 2 аргумента, но существует перегрузки, ожидающие получение 1 или 3 аргументов


// Сигнатуры перегрузки и сигнатуры реализации (overload signatures and the implementation signature)

function fm(x: string): void
function fm() {
    // ...
}
// Мы ожидаем что функция может вызываться без аргументов
fm();
// ожидался 1 аргумент а получено 0

function fx(x: boolean): void
// не правильный тип аргумента
function fx(x: string): void
// данная сигнатура перегрузки не соместима с родителем 
function (x: boolean) {}


function fy(x: string): string
// Неправильный тип возвращаемого значения
function fy(x: number): boolean
// This overload signature is not compatible with its implementation signature.
function fy(x: string | number) {
  return 'упс'
}


// Правила хороших перегрузок функции
function len(x: string): number
function len(x: any[]): number
function len(x: any) {
    return x.length
}

len('')
len([0])
len(Math.random() > 0.5 ? 'hello' : [0])
/*
 ни одна из перегрузок не совпадает с вызовом
     Перегрузка 1 из 2 (s: string): number, дает следующую ошибку
      Аргумент типа 'number[] | 'привет' не может быть присвоен параметру типа 'string'
      тип number[] не может быть присвоен типу string
    
    Перегрузка 2 из 2 (ar: any[]): number  возвращает следующую ошибку
      Аргумент типа 'number[] | 'привет' не может быть присвоен параметру типа 'any[]'
      тип string не может быть присвоен типу any[]
 */


function lenBest(x: any[] | string) {
    return x.length
}

lenBest('')
lenBest([0])
lenBest(Math.random() > 0.5 ? 'hello' : [0])
