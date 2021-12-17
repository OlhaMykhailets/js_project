import { MAX_COORD, MIN_COORD } from "./constants.js"

const validateCoords = function (x, y) {
    let result = [x, y]

    if (x < MIN_COORD) {
        result[0] = MIN_COORD
    }
    if (x > MAX_COORD) {
        result[0] = MAX_COORD
    }
    if (y < MIN_COORD) {
        result[1] = MIN_COORD
    }
    if (y > MAX_COORD) {
        result[1] = MAX_COORD
    }
    return result
}

export const movePin = function () {
    const mainPin = document.querySelector('.map__pin--main')

    const moveHandler = function (event) {
        const [x, y] = validateCoords(event.x, event.y)

        mainPin.style = `left: ${x}px; top: ${y}px;`
    }
    mainPin.addEventListener('mousedown', function () {
        document.addEventListener('mousemove', moveHandler)
    })
    mainPin.addEventListener('mouseup', function () {
        document.removeEventListener('mousemove', moveHandler)
    })
}
