
let kun = document.getElementById("kun");
let tun = document.getElementById("tun");

kun.onclick = function () {
    let tema = document.getElementById('tema');

    if (tema.getAttribute("href") == 'oq.css'){
        tema.href = 'qora.css';
        tun.style.display = "block";
        kun.style.display = 'none';
    }
}
tun.onclick = function () {
    let tema = document.getElementById('tema');

    if (tema.getAttribute("href") == 'qora.css'){
        tema.href = 'oq.css';
        kun.style.display = "block";
        tun.style.display = 'none';
    }
}

