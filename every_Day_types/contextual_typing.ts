function greet(name: string) {
    console.log(`Hello ${name.toLowerCase()}!`)
}

greet(42);

function getFavoriteNumber(): number {
    return 26;
}

getFavoriteNumber();

// Анонимные функции


// Аннотации отсутвуют , но это не мешает `TS` обноруживать ошибки
const names = ['Alice', 'Bob', 'John'];


// Определение типа на основе контекста вызова функции
names.forEach(function (s) {
    console.log(s.toUppercase());
    // Свойство toUppercase не содержится в типе 'string' может быть вы имели ввиду toUpperCase
});

// Определение типа на основе контекста также работает и для стрелочных функций
names.forEach((s) => {
    console.log(s.toUppercase());
    // Свойство toUppercase не содержится в типе 'string' может быть вы имели ввиду toUpperCase
});