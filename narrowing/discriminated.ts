// Исключающие объединения (discriminated unions)
interface Shape {
    kind: 'circle' | 'squre'
    radius?: number
    sideLength: number
}

function handleShape(shape: Shape) {
    //  Упс!
    if (shape.kind === 'rect') {
        // недостижимое условие из-за типов
    }
}

function getArea(shape: Shape) {
    if (shape.kind === 'circle') {
        // shape.rapius возможен undefined
        return Math.PI * shape.radius! ** 2; 
    }  
}

interface Circle {
    kind: 'circle'
    radius: number
}

interface Square {
    kind: 'square'
    sideLength: number
}

type Shapes = Circle | Square;

function getAreaMod (shape: Shapes) {
    if (shape.kind === 'circle') {
        return Math.PI * shape.radius ** 2
        // parameter shape: Circle
    }
    
    return Math.PI * shape.radius ** 2
    // property radius doesnt exist in Shapes
}

function getAreaMod2 (shape: Shapes) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
            // (property) shape: Circle
        case "square":
            return shape.sideLength ** 2
            // (property) shape: Square
    }
}