// 1
type ExtractNumber<T> = T extends number ? T : never

let onlyNumber:ExtractNumber<undefined| number | string>

// 2
type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

declare function anyFunction(): string;

let strTest: MyReturnType<typeof anyFunction>;  // Результат: string

// 3
interface User {
  id: number;
  name: string;
  show?: boolean
}

type ReadonlyUser = Readonly<User>
type PartialUser = Partial<User>
type RequiredUser = Required<User>