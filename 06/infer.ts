type ExtractStringType<T> = T extends `${infer U}` ? U : never

let str: ExtractStringType<'test' | 'foo'>

type ExtractNumberType<T> = T extends `${infer U}` ? `${U}` extends `${number}` ? U : never : never

let num: ExtractNumberType<'23' | '17'>

type ExtractArrayElementType<T extends readonly any[]> = T extends readonly (infer U)[] ? U : never
let arr: ExtractArrayElementType<string[]> 

type ExtractArrayElement<T> = T extends Array<infer U> ? U : T
let arr1: ExtractArrayElement<string> 

type Flatten<T> = T extends Array<infer U> ? Flatten<U> : T

let matrix: Flatten<string[][]>

type TupleToUnion<T extends any[]> = T extends [infer U, ...infer Rest]
    ? U | TupleToUnion<Rest>
    : never
    
function getTupleHead<T extends any[]>(tuple: [...T]): TupleToUnion<T> {
    return tuple[0]
}  

const result1 = getTupleHead(["hello", 42]); // result1 выводится как string | number
const result2 = getTupleHead([true, false, true]); // result2 выводится как boolean

type GetStatus<T> = T extends infer U ? U extends { status: any } ? U['status']: null : null

type Status = GetStatus<{ status: 2 }> // type: number