const value = Math.random() < 0.5 ? 'a' : 'b';

if (value !== 'a') {
    // ...
} else if (value === 'b') {
    // this condition will always 'false' since types 'a' and 'b' have no overlap
    // Данное условие будет всегда возвращать 'false', поскольку типы 'a' и 'b' не пересекаются
    
    // Упс. недопустимый устаток кода 
}