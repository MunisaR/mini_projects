 const loadtext = document.querySelector('.load-text')
 const bg = document.querySelector('.bg')

 let load = 0

 let int = setInterval(blurring, 30)
 function blurring() {
     load++


     if (load > 99) {
         clearInterval(int)
     }
     loadtext.innerText = '${load}%'
     loadtext.style.opacity = scale(load, 0, 100, 1, 0) 
 }
 