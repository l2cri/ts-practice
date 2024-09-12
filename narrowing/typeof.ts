/// === Защитник типа typeof
function padLeft(padding: number | string, input: string) {
    //return new Array(padding + 1).join(' ') + input
    // Оператор '+' не может быть применен к типам 'string' и 'number'
    
    if (typeof padding === "number") { 
        // typeof является хранителем типов
        return new Array(padding + 1).join(' ') + input
    }

    return padding + input;
}

function printAll(strs: string | string[] | null) {
    if (typeof strs === "object") {
        for(const s of strs) {
            // Потенциальное значение объекта является null
            console.log(s);
        }
    } else if (typeof strs === "string") {
        console.log(strs);
    } else {
        // ...
    } 
}
