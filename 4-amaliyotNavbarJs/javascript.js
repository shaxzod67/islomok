let active = document.querySelector('.active');
let btn = document.querySelector('button');

btn.onclick = function () {
    active.classList.toggle('active');
}