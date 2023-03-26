const calcular = document.getElementById('calcular');

function imc(){
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('result');

    if (nome !== '' && peso !== '' && altura !== ''){
        const valorIMC = (peso/ (altura * altura)).toFixed(2);
        resultado.textContent = valorIMC;

        let classificacao = '';

        if (valorIMC < 18){
            classificacao = 'abaixo do peso';
        } else if (valorIMC < 25 ){
            classificacao = 'você está com o peso ideal, parabéns'
        } else if (valorIMC < 30) {
            classificacao = 'você está levemente acima do peso'
        } else if (valorIMC < 35){
            classificacao = 'você está com obesidade grau I'
        } else if (valorIMC < 40 ){
            classificacao = 'você está com obesidade grau II'
        } else {
            classificacao = 'você está com obesidade grau II. Cuidado!!!'
        }
         

        resultado.textContent = `${nome}, seu IMC é ${valorIMC} e você está ${classificacao}`

    } else{
        resultado.textContent = 'preencha todos os campo!!!';
    }
}

calcular.addEventListener('click', imc);