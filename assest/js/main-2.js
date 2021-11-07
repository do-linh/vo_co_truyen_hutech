// about item 2
const buyTabs = document.querySelectorAll('.js-about-item-2')
const modalTab = document.querySelector('.js-modal-2')
const modalCloseTab = document.querySelector('.js-modal-close-2')
const modalContainerTab = document.querySelector('.js-modal-container-2')

function showAboutItem() {
    modalTab.classList.add('open')
}

function hideAboutItem() {
    modalTab.classList.remove('open')
}


for (const buyTab of buyTabs) {
    buyTab.addEventListener('click', showAboutItem)
}

modalCloseTab.addEventListener('click', hideAboutItem)

modalTab.addEventListener('click', hideAboutItem)

modalContainerTab.addEventListener('click', function(even) {
    even.stopPropagation()
})