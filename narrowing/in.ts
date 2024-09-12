// Сужение типов с помощью in
type Fish = { swim: () => void, name: string }
type Bird = { fly: () => void, name: string }
type Human = { swim?: () => void; fly?: () => void }

function move(animal: Fish | Bird) {
    if ('swim' in animal) {
        // Отсекаются только те типы у которых есть свойство
        return animal.swim();
    }

    return animal.fly;
}


function moveWithHuman(animal: Fish | Bird | Human) {
    if ('swim' in animal) {
        // опциональные свойства включены Fish | Human 
        return animal;
    }

    // Bird | Human
    return animal.fly;
}