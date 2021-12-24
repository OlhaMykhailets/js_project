const createCard = function (it) {
    console.log(it)
    const cardTemplate = document.querySelector('#card').content
    const cardElement = cardTemplate.querySelector('article')

    const card = cardElement.cloneNode(true)
    const cardImg = card.querySelector('.popup__avatar')
    const cardTitle = card.querySelector('.popup__title')
    const closeButton = card.querySelector('.popup__close')
    const cardAddress = card.querySelector('.popup__text--address')
    const cardPrice = card.querySelector('.popup__text--price')
    const cardType = card.querySelector('.popup__type')
    const cardCapacity = card.querySelector('.popup__text--capacity')
    const cardTime = card.querySelector('.popup__text--time')
    const cardDescription = card.querySelector('.popup__description')
    const featuresContainer = card.querySelector('.popup__features')


    closeButton.addEventListener('click', function(){
        card.remove()
    })


    cardImg.src = it.author.avatar
    cardTitle.textContent = it.offer.title
    cardAddress.textContent = it.offer.address
    cardPrice.textContent = it.offer.price
    cardType.textContent = it.offer.type
    cardCapacity.textContent = `${it.offer.rooms} rooms for ${it.offer.guests}`
    cardTime.textContent = `checkin at ${it.offer.checkin}, checkout at ${it.offer.checkout}`
    cardDescription.textContent = it.offer.description

    featuresContainer.innerHTML = ''

    it.offer.features.forEach(function (feature) {
        const li = `<li class = "popup__feature popup__feature--${feature}"></li>`
        featuresContainer.insertAdjacentHTML('beforeend', li)
    })

    return card
}

export const setPins = function (data) {
    const pinTemplate = document.querySelector('#pin').content
    const pinElement = pinTemplate.querySelector('button')
    const pinsContainer = document.querySelector('.map__pins')
    const cardContainer = document.querySelector('.map')

    data.forEach(function (it) {

        const pin = pinElement.cloneNode(true)
        const image = pin.querySelector('img')

        pin.style = `left: ${it.location.x}px; top: ${it.location.y}px;`
        image.src = it.author.avatar


        const card = createCard(it)

        pin.addEventListener('click', function () {
            cardContainer.querySelectorAll('.map__card').forEach((it) => it.remove())
            cardContainer.insertAdjacentElement('beforeend', card)
        })

        pinsContainer.insertAdjacentElement('beforeend', pin)


    })
}
