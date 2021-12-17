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

export const getNodeValue = function (selector, attr = 'value') {
    return document.querySelector(selector)[attr]
}

export const removeAllNodes = function (selector) {
        document.querySelectorAll(selector).forEach((elem) => elem.remove())
}
