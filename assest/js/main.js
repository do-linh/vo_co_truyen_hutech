// modal js

const buyBtns = document.querySelectorAll('.js-about-item')
const modal = document.querySelector('.js-modal')
const modalClose = document.querySelector('.js-modal-close')
const modalContainer = document.querySelector('.js-modal-container')

function showAboutItem() {
    modal.classList.add('open')
}

function hideAboutItem() {
    modal.classList.remove('open')
}

for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showAboutItem)
}

modalClose.addEventListener('click', hideAboutItem)

modal.addEventListener('click', hideAboutItem)

modalContainer.addEventListener('click', function(even) {
    even.stopPropagation()
})

// chống copy
// $(document).ready(function() {
//     $('*').bind('cut copy paste contextmenu', function(e) {
//         e.preventDefault();
//     })
// });

// function nocontext(e) {
//     var clickedTag = (e == null) ? event.srcElement.tagName : e.target.tagName;
//     if (clickedTag == "IMG")
//         return false;
// }
// document.oncontextmenu = nocontext;