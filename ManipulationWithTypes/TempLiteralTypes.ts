// Типы шаблонных литералов (template literal types)
type World = 'world'

type Greeting = `hello ${World}`
// type Greeting = 'hello world'

// интерполированная позиция
type EmailLocaleIDs = 'welcome_email' | 'email_heading'
type FooterLocaleIDs  = 'footer' | 'footer_sendoff'

type AllLocateIDs = `${EmailLocaleIDs | FooterLocaleIDs}_id`
// 'welcome_email_id' | 'email_heading_id' |  'footer_id' | 'footer_sendoff_id'

// Можно применять множественно
type Lang = 'en' | 'ja' | 'pt'

type LocaleMessageIDs = `${Lang}_${AllLocateIDs}`
// en_welcome_email_id | en_email_heading_id | en_footer_id ...

// Строковые объединения в типах
interface PersonObj {
    firstName: string
    lastName: string
    age: number
}

function makeWatchedObject (personObj: PersonObj) {
    return { 
        on: function(event: string, fn: (value: string) => void) {

        }
    }
}

const person = makeWatchedObject({
    firstName: 'John',
    lastName: 'Smith',
    age: 30
})

person.on('firstNameChanged', (newValue: string) => {
    console.log(`Имя было изменено на ${newValue}!`)
})


// 
type PropEventSource<Type> = {
    on(
        eventName: `${string & keyof Type}Changed`,
        callback: (newValue: any) => void
    ):void
}

// создадим наблюдаемый объект с методом "on"
declare function makeWatchedObject2<Type>(
    obj: Type,
): Type & PropEventSource<Type>

const person2 = makeWatchedObject2({
    firstName: 'John',
    lastName: 'Smith',
    age: 30
})

person2.on('firstNameChanged', () => {})

person2.on('firstName', () => {})
person2.on('frstNameChanged', () => {})
// Параметр типа firstName  не может быть присвоен типу ...

// Предположение типов с помощью шаблонных литералов
type PropEventSource3<Type> = {
    on<Key extends string & keyof Type>
    (eventName: `${Key}Changed`, callback: (newValue: Type[Key]) => void): void
} 

declare function makeWatchedObject3<Type>(obj: Type): Type & PropEventSource3<Type>

const person3 = makeWatchedObject3({
    firstName: 'John',
    lastName: 'Smith',
    age: 20
})

person3.on('firstNameChanged', newName => {
    // parameter newName: string на основе входного параметра
    console.log(newName.toLowerCase())
})

person3.on('ageChanged', newAge => {
    // parameter newAge: number
    if (newAge < 0) {
        console.log('!!!')
    }
})

// Внутренние манипуляции со строками (intrinsic string manipulation types)
// type Greeting = 'Hello, world'
type ShortyGreeting = Uppercase<Greeting>
// type ShortyGreeting = HELLO, WORLD

type ASCIICacheKey<Str extends string> = `ID-${Uppercase<Str>}`
type MainID = ASCIICacheKey<'my_app'>
// type MainID = 'ID-MY_APP'

type QuietGreeting = Lowercase<Greeting>
// 'hello, world

type LowerCaseGreeting = Capitalize<Greeting>

type UncomfortableGreeting =  Uncapitalize<Greeting>


// реализация

function applyStringMapping(symbol: Symbol, str: string) {
    switch (intrinsicTypeKinds.get(symbol.escapedName as string)) {
      case IntrinsicTypeKind.Uppercase:
        return str.toUpperCase()
      case IntrinsicTypeKind.Lowercase:
        return str.toLowerCase()
      case IntrinsicTypeKind.Capitalize:
        return str.charAt(0).toUpperCase() + str.slice(1)
      case IntrinsicTypeKind.Uncapitalize:
        return str.charAt(0).toLowerCase() + str.slice(1)
    }
    return str
  }