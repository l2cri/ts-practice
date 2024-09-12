

//  Анализ потока управления (control flow analysis)
function example2 () {
    let x: string | number | boolean

    x = Math.random() < 0.5

    console.log(x)
    // let x: boolean

    if (Math.random() < 0.5) {
        x = 'hello'
        console.log(x)
        // let x: string
    } else {
        x = 10
        console.log(x)
        // let x: number
    }

    return x;
    // x: string | number
}
