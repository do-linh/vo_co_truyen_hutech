const buyClicks = document.querySelectorAll('.js-about-item-3')
const modalClick = document.querySelector('.js-modal-3')
const modalCloseClick = document.querySelector('.js-modal-close-3')
const modalContainerClick = document.querySelector('.js-modal-container-3')

function showAboutItem() {
    modalClick.classList.add('open')
}

function hideAboutItem() {
    modalClick.classList.remove('open')
}


for (const buyClick of buyClicks) {
    buyClick.addEventListener('click', showAboutItem)
}

modalCloseClick.addEventListener('click', hideAboutItem)

modalClick.addEventListener('click', hideAboutItem)

modalContainerClick.addEventListener('click', function(even) {
    even.stopPropagation()
})