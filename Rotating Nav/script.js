const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')

open.addEventListener('click', () => {
    container.classList.add('show-nav')
    container.classList.add('rotate')

})
close.addEventListener('click', () => {
    container.classList.remove('show-nav')
    container.classList.remove('rotate')
})

