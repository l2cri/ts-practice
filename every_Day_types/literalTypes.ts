function printText(s: string, alignment: 'left' | 'right' | 'center') {
    // ..
}

printText('str', 'left');
printText('str', 'centre');

function compare(a: string, b: string): 1 | -1 | 0 {
    return a === b ? 0 : a > b ? 1 : -1;
}

interface Option {
    width: number
}

function configure(x: Option | 'auto') {
    // ...
}

configure({ width: 10 })
configure('auto')
configure('automatic')

// Предположение типов
const obj = { counter: 0 }

if (true) {
    obj.counter = 1
}

function handleRequest(url: string, method: 'GET' | 'POST') {
    //...
}

const req = { url: 'https://example.com', method: 'GET' }

// для предотвращения подмены ниже
//req.method = 'PUT';

handleRequest(req.url, req.method)
// тип не может быть строкой


// 1
const req2 = { url: 'https://example.com', method: 'GET' as 'GET' }

// req2.method = 'PUT';  PUT не может быть назначен типу GET

handleRequest(req2.url, req2.method as 'GET')

// 2
const req3 = { url: 'https://example.com', method: 'GET' } as const

// req3.method = 'POST' // не может быть присвоено readonly свойству

handleRequest(req3.url, req3.method)