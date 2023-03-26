const img = document.getElementById('img');
const buttons = document.getElementById('buttons');


const trafficLight = ( event ) => {
    turnOn.green();
    
}



const turnOn = {
    'green': () => img.src = './img/verde.png',
    'red': () => img.src = './img/vermelho.png',
    'yellow': () => img.src = './img/amarelo.png'
}

buttons.addEventListener('click', trafficLight);

/*const traffivLight = () => {

    if (event.target.id == 'red'){
        turnOnRed();
    } else if (event.targert.id == 'yellow') {
        turnOnYellow();
    } else if (evente.target.id == 'green') {
        turnOnGreen();
    }

}*/