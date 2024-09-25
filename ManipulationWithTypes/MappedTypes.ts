// Связанные типы (mapped types)
type Horse = 'one' | 1

type OnlyBooleansAndHorses = {
    [key: string]: boolean | Horse
}

const conforms: OnlyBooleansAndHorses = {
    del: true,
    rodney: false
}

// Связной тип
type OptionsFlags<Type> = {
    [Property in keyof Type]: boolean
}

// Изменит все на boolean
type FeatureFlags = {
    darkMode: () => void
    newUserProfile: () => void
}

type FeatureOptions = OptionsFlags<FeatureFlags>
//  type FeatureOptions: { darkMode: boolean, newUserProfile: boolean }

// Модификаторы связывания (mapping modifiers)

// Удаляем аттрибуты `readonly` из свойств типа
type CreateMutable<Type> = {
    -readonly [Property in keyof Type]: Type[Property]
}

type LockedAccount = {
    readonly id: string
    readonly name: string
}

type UnlockedAccount = CreateMutable<LockedAccount>
// type UnlockedAccount = {id: string, name: string }

// Удаляем optional из свойств типа
type Concrete<Type> = {
    [Property in keyof Type]-?: Type[Property]
}

type MaybeUser = {
    id: string
    name?: string
    age?: number
}

type User = Concrete<MaybeUser>
// type user = {id: string, name: string, age: number }

// Повторное связывание ключей с помощью as
type NewKeyTypes = string

type MappedTypeWithNewProperties<Type> = {
    [Properties in keyof Type as NewKeyTypes]: Type[Properties]
}

type StrMappedType = MappedTypeWithNewProperties<number>
let a345: StrMappedType

// Типы шаблонных литералов getCapitalize
type Getters<Type> = {
    [Property in keyof Type as `get${Capitalize<
        string & Property
      >}`]: () => Type[Property]
}

interface Person {
    name: string
    age: number
    location: string
}
type LazyPerson = Getters<Person>
// type LazyPerson = { getName: () => string, getAge: () => number, getLocation: () => string }


// Фильтр never
type RemoveKindField<Type> = {
    [Property in keyof Type as Exclude<Property, 'kind'>]: Type[Property]
}

interface Circle {
    kind: 'circle'
    radius: number
}

type KindLessCircle = RemoveKindField<Circle>
// type  KindLessCircle = { radius: number }

// Условные типы
type ExtractPII<Type> = {
    [Property in keyof Type]: Type[Property] extends { pill: true } ? true : false
}

type DBFields = {
    id: { format: 'incrementing' }
    name: { type: string, pill: true }
}

type ObjectNeedingGDPRDeletion = ExtractPII<DBFields> 
// type ObjectNeedingGDPRDeletion = { id: false, name: true }