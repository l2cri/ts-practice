interface Container {
    value: number | null | undefined
}

// Сужение типов с помощью не строгого типа !=

function multiplyValue (container: Container, factor: number) {
    // удаляем null и undefined  из типа
    if (container.value != null) {
        console.log(container.value);
        // (property) container.value: number
    }
}
