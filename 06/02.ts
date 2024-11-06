type TaskType = "a" | "b" 

type TaskTypeObj = {
  type: "a" | "b"
}

type TaskTypeReturns = {
  a: string
  b: string[]
}

interface IInterfaceName
{
    getResponse<T extends (TaskType | undefined)>(message: string, task?: T): T extends undefined ? 123 : (T extends TaskType ? TaskTypeReturns[T] : never);
}

// Для извлечения типа определенного свойства
interface IInterfaceNameV2
{
    getResponse<T extends TaskTypeObj>(message: string, task?: T): T extends {type: infer V} 
        ? (V extends TaskType 
            ? TaskTypeReturns[V] 
            : never) 
        : never;
}

function foo(name: IInterfaceName) {
  const res1 = name.getResponse("xxx", 'a'); // string
  const res2 = name.getResponse("xxx", 'b'); // string[]
  // Обрати внимание, что без перегрузки мы получили не то что ожидаем - а вообще все типы
  const res3 = name.getResponse("xxx"); // string | string[] | 123
}

function fooV2(name: IInterfaceNameV2) {
  const res1 = name.getResponse("xxx", {type: 'a'}); // string
  const res2 = name.getResponse("xxx", {type: 'b'}); // string[]
  const res3 = name.getResponse("xxx"); // string | string[]
}

export {}