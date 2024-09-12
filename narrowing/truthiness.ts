// проверка на истонность truthiness narrowing && || if

function getUserOnline(numUsersOnline: number) {
    if (numUsersOnline) {
        return `В сети находится ${numUsersOnline} человек!`
    }
    return 'Тут никого нет :('
}

function printAllMod(strs: string | string[] | null) {
    if (strs && typeof strs === "object") {
        for(const s of strs) {
            console.log(s)
        }
    } else if (typeof strs === 'string') {
        console.log(strs)
    }
}