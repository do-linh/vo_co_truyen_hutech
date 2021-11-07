const buyClacks = document.querySelectorAll('.js-about-item-4')
const modalClack = document.querySelector('.js-modal-4')
const modalCloseClack = document.querySelector('.js-modal-close-4')
const modalContainerClack = document.querySelector('.js-modal-container-4')

function showAboutItem() {
    modalClack.classList.add('open')
}

function hideAboutItem() {
    modalClack.classList.remove('open')
}


for (const buyClack of buyClacks) {
    buyClack.addEventListener('click', showAboutItem)
}

modalCloseClack.addEventListener('click', hideAboutItem)

modalClack.addEventListener('click', hideAboutItem)

modalContainerClack.addEventListener('click', function(even) {
    even.stopPropagation()
})