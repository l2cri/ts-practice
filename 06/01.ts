type TaskType = "a" | "b" 

interface IInterfaceName
{
    // Посмотри как это работает без этой строки, а потом расскоментируй
    //getResponse(message: string): string
    getResponse<T extends (TaskType | undefined)>(message: string, task?: T): 
      T extends 'a' 
        ? string 
        : T extends 'b' 
            ? string[]
            : string; // пытаемся вернуть string, когда нет task, но без перегрузки не работает
}

function foo(name: IInterfaceName) {
  const res1 = name.getResponse("xxx", 'a'); // string
  const res2 = name.getResponse("xxx", 'b'); // string[]
  
  // Посмотри как это без перегрузки, а потом попробуй расскоментируй перегрузку выше
  const res3 = name.getResponse("xxx");
  // Без перегрузки string | string[]
  // С перегрузкой string
}

export {}