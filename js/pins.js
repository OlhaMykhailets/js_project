const createCard = function (mock) {
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
    const featuresContainer = card.querySelector('.popup__features')
    const cardFeature = card.querySelector('.popup__feature')
    const cardDescription = card.querySelector('.popup__description')


    closeButton.addEventListener('click', function(){
        card.remove()
    })


    cardImg.src = mock.author.avatar
    cardTitle.textContent = mock.offer.title
    cardAddress.textContent = mock.offer.address
    cardPrice.textContent = mock.offer.price
    cardType.textContent = mock.offer.type
    cardCapacity.textContent = `${mock.offer.rooms} rooms for ${mock.offer.guests}`
    cardTime.textContent = `checkin at ${mock.offer.checkin}, checkout at ${mock.offer.checkout}`
    cardDescription.textContent = mock.offer.description

    featuresContainer.textContent = ''
        mock.offer.features.forEach(function (feature) {
            const tempFeature = cardFeature.cloneNode()
            featuresContainer.insertAdjacentElement('beforeend', tempFeature)
            // return featuresContainer
        })

    // console.log(card);
    return card

}

export const setPins = function (mocks) {
    const pinTemplate = document.querySelector('#pin').content
    const pinElement = pinTemplate.querySelector('button')
    const pinsContainer = document.querySelector('.map__pins')
    const cardContainer = document.querySelector('.map')

    mocks.forEach(function (mock) {

        const pin = pinElement.cloneNode(true)
        const image = pin.querySelector('img')

        pin.style = `left: ${mock.location.x}px; top: ${mock.location.y}px;`
        image.src = mock.author.avatar


        const card = createCard(mock)

        pin.addEventListener('click', function(){
            cardContainer.querySelectorAll('.map__card').forEach((it) => it.remove())
            cardContainer.insertAdjacentElement('beforeend', card)
        })

        pinsContainer.insertAdjacentElement('beforeend', pin)


    })
}
