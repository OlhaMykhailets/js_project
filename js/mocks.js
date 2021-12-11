import { getRandom } from './helpers.js'
import { getRandomFromArray } from './helpers.js'
import { getFewRandomFromArray } from './helpers.js'
import { TITLES, MAX_COORD, MIN_COORD, TYPES, ROOMS, GUESTS, TIME_VALUES, FEATURES } from './constants.js'

const createMock = function (i) {
    const mock = {}

    mock.location = {
        x: getRandom(MAX_COORD, MIN_COORD),
        y: getRandom(MAX_COORD, MIN_COORD),
    }

    mock.offer = {
        title: getRandomFromArray(TITLES),
        address: `${mock.location.x}, ${mock.location.y}`,
        price: getRandom(100000) + `$`,
        type: getRandomFromArray(TYPES),
        rooms: getRandomFromArray(ROOMS),
        guests: getRandomFromArray(GUESTS),
        checkin: getRandomFromArray(TIME_VALUES),
        checkout: getRandomFromArray(TIME_VALUES),
        features: getFewRandomFromArray(FEATURES),
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt quae blanditiis dolor voluptatum? Rem, dolore cumque! Illum fugit asperiores voluptatem ex, enim optio recusandae soluta vel quibusdam maiores sed quos.'
    }
    mock.author = {
        avatar: `img/avatars/user0${i + 1}.png`,
    }
    // console.log(mock)
    return mock

}

export const getMocks = function (count = 8) {
    const mockArr = []

    for (let i = 0; i < count; i++) {
        const mock = createMock(i)
        mockArr.push(mock)
    }
    return mockArr
}
