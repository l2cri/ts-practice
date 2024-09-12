function printCoords(pt: { x: number; y: number }) {
    console.log(`Значение коррдинаты x:${pt.x}`);  
    console.log(`Значение коррдинаты y:${pt.y}`);
}

printCoords({ x: 1, y: 2});

// Опциональное свойство
function printName(obj: { first: string; last?: string}) {
    // Ошибка - приложение может сломаться, если аргумент 'last' не будет передан в фукнкцию
    // console.log(obj.last.toUpperCase());

    if (obj.last !== undefined) {
        // Теперь все в порядке
        console.log(obj.last.toUpperCase());
    }

    // Безопасная альтернатива, использующая современный тип JS - орператор опциональной последовательности
    // (?.)
    console.log(obj.last?.toUpperCase());
}

printName({ first: 'John' });
printName({ first: 'Jane', last: 'Air' });

export {}