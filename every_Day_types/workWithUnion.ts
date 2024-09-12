function printId (id: number | string) {
    console.log(id.toUpperCase());
    // property toUpperCase does not exist on type 'string | nubber'. Property toUpperCase does not exist on type 'number'
}

export {}