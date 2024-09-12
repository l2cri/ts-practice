function liveDangerously(x?: number | undefined) {
    // Ошибки не возникает
    console.log(x!.toFixed());
}

