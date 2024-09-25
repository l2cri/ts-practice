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