// Проверка на равенство equality narrowing ===
function example (x: string | number, y: string | boolean) {
    if (x === y) {
        // можем вызывать любой строковый тип операторов
        x.toUpperCase();
        y.toUpperCase();
    } else {
        console.log(x)
        // parameter x: string | number
        console.log(y)
        // parameter y: string | number
    }
}