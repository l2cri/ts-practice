function makeDate(dOrTimestamp, m, y) {
    if (m !== undefined && y !== undefined) {
        console.log('2');
        return new Date(y, m, dOrTimestamp);
    }
    else {
        console.log('1 или 3');
        return new Date(dOrTimestamp);
    }
}
var dr1 = makeDate(12345678);
var dr2 = makeDate(5, 5, 5);
var dr3 = makeDate(1, 3);
// Нет перегрузки, принимающей 2 аргумента, но существует перегрузки, ожидающие получение 1 или 3 аргументов
