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
        if (config.price === 'low') {
            filteredData = filteredData.filter(function (it) {
                return it.offer.price < 10000
            })
        }
        else if (config.price === 'high') {
            filteredData = filteredData.filter(function (it) {
                return it.offer.price > 50000
            })
        }
        else {
            filteredData = filteredData.filter(function (it) {
                return it.offer.price > 10000 && it.offer.price < 50000
            })
        }      
    }


    if (config.rooms !== ANY) {
        filteredData = filteredData.filter(function (it) {
            return it.offer.rooms === config.rooms
        })
    }


    if (config.guests !== ANY) {
        filteredData = filteredData.filter(function (it) {
            return it.offer.guests === config.guests
        })
    }


    if (config.wifi) {
        filteredData = filteredData.filter(function (it) {
            return it.offer.features.some(function (feature) {
                return feature === 'wifi'
            })
        })
    }

    if (config.dishwasher) {
        filteredData = filteredData.filter(function (it) {
            return it.offer.features.some(function (feature) {
                return feature === 'dishwasher'
            })
        })
    }
    
    if (config.parking) {
        filteredData = filteredData.filter(function (it) {
            return it.offer.features.some(function (feature) {
                return feature === 'parking'
            })
        })
    }

    if (config.washer) {
        filteredData = filteredData.filter(function (it) {
            return it.offer.features.some(function (feature) {
                return feature === 'washer'
            })
        })
    }

    if (config.elevator) {
        filteredData = filteredData.filter(function (it) {
            return it.offer.features.some(function (feature) {
                return feature === 'elevator'
            })
        })
    }

    if (config.conditioner) {
        filteredData = filteredData.filter(function (it) {
            return it.offer.features.some(function (feature) {
                return feature === 'conditioner'
            })
        })
    }

    return filteredData
}

const getConfig = function () {
    return {
        type: getNodeValue('#housingtype'),
        price: getNodeValue('#housing-price'),
        rooms: getNodeValue('#housing-rooms'),
        guests: getNodeValue('#housing-guests'),
        wifi: getNodeValue('#filter-wifi', 'checked'),
        dishwasher: getNodeValue('#filter-dishwasher', 'checked'),
        parking: getNodeValue('#filter-parking', 'checked'),
        washer: getNodeValue('#filter-washer', 'checked'),
        elevator: getNodeValue('#filter-elevator', 'checked'),
        conditioner: getNodeValue('#filter-conditioner', 'checked')
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
