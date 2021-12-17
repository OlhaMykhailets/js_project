export const setError = function (callback) {
    const errorTemplate = document.querySelector('#error').textContent
    const errorElement = errorTemplate.querySelector('.error')
    const mainElement = document.querySelector('main')
    const aganinButton = errorElement.querySelector('.error__button')

    aganinButton.addEventListener('click', callback)

    mainElement.insertAdjacentElement('afterbegin', errorElement)
}
