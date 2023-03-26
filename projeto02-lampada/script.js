const turnOn = document.getElementById('turnOn');
const turnoOff = document.getElementById('turnOff');
const img = document.getElementById('img');

function isBroken(){
    return img.src.indexOf = ("quebrada") > -1;
}

function ligar(){
    if (!isBroken ()) {
      img.src='./img/ligada.jpg';
    }
}

function desligar(){
    if (!isBroken()){

    img.src ='./img/desligada.jpg';

    }
}

function broken() {
    img.src="./img/quebrada.jpg";
}

turnOn.addEventListener('click', ligar)
turnOff.addEventListener('click', desligar)
img.addEventListener("mouseover", ligar)
img.addEventListener('mouseleave', desligar)
img.addEventListener("dblclick", broken)