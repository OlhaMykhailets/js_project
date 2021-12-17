import { ANY } from './constants.js'
import { getNodeValue, removeAllNodes } from './helpers.js'
import { setPins } from './pins.js'

const filterDataByConfig = function (data, config) {
    let filteredData = data

    if (config.type !== ANY) {
        filteredData = filteredData.filter(function (it) {
            return it.offer.type === config.type
        })
    }

    if (config.price !== ANY) {
        filteredData = filteredData.filter(function (it) {
            return it.offer.price === config.price
        })
    }

    if (config.wifi) {
        filteredData = filteredData.filter(function (it) {
            return it.offer.features.some(function (feature) {
                return feature === 'wifi'
            })
        })
    }

    return filteredData
}

const getConfig = function () {
    return {
        type: getNodeValue('#housingtype'),
        wifi: getNodeValue('#filter-wifi', 'checked')
    }
}

export const filter = function (data) {
    const filteredData = filterDataByConfig(data, getConfig())
    const form = document.querySelector('.map__filters')

    form.addEventListener('change', function () {
        const filteredDataOnChange = filterDataByConfig(data, getConfig())

        removeAllNodes('.map__pin:not(.map__pin--main)')
        setPins(filteredDataOnChange)
    })

    return filteredData

}
