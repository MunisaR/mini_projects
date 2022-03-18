'use strict'

const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const btnClose = document.querySelector('.close')
const btnShow = document.querySelectorAll('.show')

for (let i = 0; i < btnShow.length; i++) {
    btnShow[i].addEventListener('click', function () {
        modal.classList.remove('hidden')
        overlay.classList.remove('hidden')
    })
}

const closeModal = function () {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}


const openModal = function () {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}

btnClose.addEventListener('click', closeModal)
overlay.addEventListener('click', openModal)


document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        if(!modal.classList.contains('hidden')) {
            closeModal()
        }
    }
})