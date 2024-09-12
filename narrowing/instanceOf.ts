
// instanceof
function logValue(x: Date | string) {
    if (x instanceof Date) {
        return x.toUTCString();
        // (parameter) x: Date
    } else {
        return x.toLocaleUpperCase();
        // (parameter) x: string
    }
}