
// is - Использование предикатов типа (type predicates)

function getSmallPet(): Fish | Bird {
    const props = {
        name: 'someName'
    }
    
    const uniqueProps = Math.random() > 0.5 ? { swim: () => {} } : { fly: () => {}}

    return { ...props, ...uniqueProps };
}

function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
}

const pet = getSmallPet();

if (isFish(pet)) {
    pet.swim();
    // (property) pet: Fish
} else {
    //  (property) pet: Bird
    pet.fly();
}

const zoo: (Fish | Bird)[] = [getSmallPet(), getSmallPet(), getSmallPet()]

const underWater1: Fish[] = zoo.filter(isFish)
// или
const underWater2: Fish[] = zoo.filter(isFish) as Fish[]

// в более сложных случаях, может потребоваться повторное использование предиканта 
const underWater3 : Fish[] = zoo.filter((pet): pet is Fish => {
    if (pet.name == 'sharkley') return false;
    return isFish(pet);
})