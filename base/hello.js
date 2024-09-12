"use strict";
// tsc --noEmitOnError
function greet(person, date) {
    console.log(`Hello ${person}! Today is ${date.toDateString()}`);
}
greet('John', new Date());
