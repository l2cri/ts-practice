// Тип Never
interface Triangle {
    kind: 'triangle'
    sideLength: number
}

type AllShape = Circle | Square | Triangle

function getAreaMod3 (shape: AllShape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
            // (property) shape: Circle
        case "square":
            return shape.sideLength ** 2
            // (property) shape: Square
        default:
            const _exhaustiveCheck: never = shape
            // Triangle is not assignable to type 'never'
            return _exhaustiveCheck;    
    }
}