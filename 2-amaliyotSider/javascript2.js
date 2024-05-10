let imgs = document.querySelectorAll('img');
let next = document.getElementById('next');
let prev = document.getElementById('prev');

let i = 0;

next.onclick = function () {
    
    imgs[i].style.display = 'none';
    i++
    if(i >= imgs.length){
        i=0;
    }
    imgs[i].style.display = 'block';
    div.innerHTML = `<audio src="./Next.wav" autoplay></audio>`
}

prev.onclick = function () {
    
    imgs[i].style.display = 'none';
    i--
    if(i < 0){
        i=imgs.length -1
    }
    imgs[i].style.display = 'block'
    div.innerHTML = `<audio src="./back.wav" autoplay></audio>`
    if(input.value < 1){
        return false
        imgs[i].style.display = 'none'
    } 
}
