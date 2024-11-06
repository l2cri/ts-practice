// 1
function stringOrArray(input: string | string[]) {
    if (Array.isArray(input)) {
        return input.join()
    }

    if (typeof input === 'string') {
        return input.toUpperCase()
    }
}

// 2
interface Task {
    add: string
    delete: string
    done: boolean
}

type TypeAllPartial = Partial<Task> // {all?: string, delete?: string, done?: boolean }
const AllPartial: TypeAllPartial = {}

interface User {
    id: number
    name: string
    email: string
    role: string 
}

type PickType = Pick<User, 'id' | 'name'>
const IdName: PickType = { id: 1, name: 'foo' }

// 3
type IsArray<T> = T extends unknown[] ? T : unknown  

export {}