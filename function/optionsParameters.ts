function fn(x?: number) {
    console.log(x?.toFixed())
    console.log(x?.toFixed(3))
}
// OK
fn()
// OK
fn(3)

function f(x = 10) {
    // ..
}

// OK
f()
f(3)
f(undefined)

// Обратный вызов
 function myForEach<Arr>(
    arr: Arr[], 
    callback: (arg: Arr, index?: number) => void
) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i)
        callback(arr[i])
    }
}

myForEach([1, '2', 3], (a) => console.log(a))
myForEach([1, 2, 3], (a, i) => console.log(a, i))
myForEach([1, 2, 3], (a, i) => {
    console.log(i?.toFixed())
    // Возможным значением объекта является 'undefined'
    if (i !== undefined) {
        console.log(i.toFixed())
    }
})