interface User {
    id: number
    name: string
    email: string
    role: string 
}

type RequiredUser = {
    [K in keyof User]-?: Readonly<User[K]>
}
const myUser: RequiredUser = { id: 2, name: 'test', email: 'test', role: 'test'}

export {}

