let imgs = document.querySelectorAll('img');
let next = document.getElementById('next');
let prev = document.getElementById('prev');

let i = 0;

next.onclick = function () {
    
    imgs[i].classList.remove('active')
    i++
    if(i >= imgs.length){
        i=0;
    }
    imgs[i].classList.add('active')
}

prev.onclick = function () {
    
    imgs[i].classList.remove('active')
    i--
    if(i < 0){
        i=imgs.length -1
    }
    imgs[i].classList.add('active')

    if(input.value < 1){
        return false
        imgs[i].style.display = 'none'
    } 
}

setInterval(function(params) {
    imgs[i].classList.remove('active')
    i++
    if(i >= imgs.length){
        i = 0;
    }
    imgs[i].classList.add('active')
},3000);

