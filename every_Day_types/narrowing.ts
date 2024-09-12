function printId(id: string | number) {
    if (typeof id === 'string') {
        // в этой ветке 'id' имеет тип 'string'
        console.log(id.toUpperCase())
    } else {
        // здесь id имеет тип 'number'
        console.log(id)
    }
} 

function welcomePeople(x: string[] | string) {
    if (Array.isArray(x)) {
        // тут x это string[]
        console.log('Привет ' + x.join(' и '));
    } else {
        // тут x это string
        console.log('Добро пожаловать одинокий странник ' + x);
    }
}

// Имеет общие свойства
function getFirstTree(x: string[] | string) {
    return x.slice(0, 3);
}