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
handleRequest(req.url, req.method)
// тип не может быть строкой


// 1
const req2 = { url: 'https://example.com', method: 'GET' as 'GET' }
handleRequest(req2.url, req2.method as 'GET')

// 2
const req3 = { url: 'https://example.com', method: 'GET' } as const
handleRequest(req3.url, req3.method)
