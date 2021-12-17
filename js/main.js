import { URL } from './constants.js'
import { setError } from './error.js'
import { filter } from './filters.js'
// import { getMocks } from "./mocks.js"
import { movePin } from './main-pin.js'
import { setPins } from "./pins.js"

const start = async function () {
    let data

    try {
        const resp = await fetch(URL)
        data = await resp.json()
    } catch (error) {
        console.warn(error)
        setError(start)
    }

    const filteredData = filter(data)

    setPins(filteredData)
    movePin()
}

start()
