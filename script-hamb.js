var btnHamb = document.getElementById("btn-hamb");
var iconHamb = document.getElementById("icon-hamb")

function toggleMenu() {
    var nav = document.getElementById("nav");
    nav.classList.toggle('active');
}

btnHamb.addEventListener('click', toggleMenu);

var num = 2;

function mudarImg() {
    if (num == 1) {
        iconHamb.src = "./assets/shared/icon-hamburger.svg"
    } else if (num == 2) {
        iconHamb.src = "./assets/shared/icon-close.svg"
    }
    num = (num % 2) + 1;
}


var description = new Array("See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.", "Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and a half times the size of Everest!", "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream. With an icy surface, it's perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.", "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.")

function mudaTexto(nome, info, distance, time) {
    document.getElementById("planet-name").innerHTML = nome
    document.getElementById("planet-description").innerHTML = info
    document.getElementById("distance").innerHTML = distance
    document.getElementById("time").innerHTML = time
}

function mudarImagemMoon() {
    document.getElementById("imagem").src = "./assets/destination/image-moon.png"
}
function mudarImagemMars() {
    document.getElementById("imagem").src = "./assets/destination/image-mars.png"
}
function mudarImagemEuropa() {
    document.getElementById("imagem").src = "./assets/destination/image-europa.png"
}
function mudarImagemTitan() {
    document.getElementById("imagem").src = "./assets/destination/image-titan.png"
}



