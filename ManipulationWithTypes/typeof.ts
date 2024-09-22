// Оператор типа typeof
const s = 'привет'
let n: typeof s
// n: string

// ReturnType
type Predicate = (x: unknown) => boolean
type K = ReturnType<Predicate>
// type K = boolean

// Ошибка
function f() {
    return { x: 10, y: 20 }
}

type P = ReturnType<f>
// f является ссылкой на значение но используется как тип. Возможно вы имели 'typeof f'
type R = ReturnType<typeof f>
// R: { x: number, y: number }

function msgBox(mes: string): boolean {
    return Math.random() > 0.5
}

// Ограничения

// Должны были использовать ReturnType<typeof msgBox> но вместо этого написали
const shouldContinue: typeof msgBox('Вы уверены, что хотите продолжить ?')
// ',' expected