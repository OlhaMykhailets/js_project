// export const randomInteger = function (min = MIN_COORD, max = MAX_COORD) {
//     const rand = min + Math.random() * (max + 1 - min);
//     return Math.floor(rand)
// }

export const getRandom = function (max = 10, min = 0) {
    let rand = min + Math.random() * (max + 1 - min)
    return Math.floor(rand)
}

export const getRandomFromArray = function (arr) {
    const index = getRandom(arr.length)
    return arr[index]
}

export const getFewRandomFromArray = function (arr) {
    let newArr = [];
    for (let i = 0; i < getRandom(arr.length); i++) {
        newArr.push(getRandomFromArray(arr))
    }
    return newArr
}

