interface Point {
    x: number
    y: number
}

function printCoords(pt: Point) {
    console.log(`Значение координаты x: ${pt.x}`);
    console.log(`Значение координаты y: ${pt.y}`);
}

printCoords({ x: 3, y: 4 })

interface Animal {
    name: string
}

interface Bear extends Animal {
    honey: boolean
}

function getBear(): Bear {
    return { name: 'Bear', honey: true }
}

const bear = getBear();
bear.name
bear.honey


interface Window {
    title: string
}

interface Window {
    ts: TypeScriptAPI
}

const src = 'const a = `Hello World`'
window.ts.traspileModule(src, {})

export {}
