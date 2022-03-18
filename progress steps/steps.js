const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelector('.circle')

let currentActive = 1

next.addEventListener('click',  () => {
    currentActive++

    if(currentActive > circles.length) {
        currentActive = circles.length
    }

})

prev.addEventListener('click',  () => {
    currentActive--

    if(currentActive < 1) {
        currentActive = 1
    }

    console.log(currentActive)

})



