console.clear()
const prompt = require("prompt-sync")();

// Nesse momento eu estou apenas ensinando a função para o programa
// Ela não vai ser executada enquanto não for pedido.
// Eu preciso 'Ensinar' apenas uma vez, e ela pode ser executada quantas vezes eu quiser.
function tomarBanho(){
    console.log('Tirar a roupa suja');
    console.log('Abrir o chuveiro');
    console.log('Se ensaboar');
    console.log('Se enxaguar');
    console.log('Lavar o cabelo');
    console.log('Enxaguar o cabelo');
    console.log('Fechar o chuveiro');
    console.log('Se secar');
    console.log('Colocar uma roupa limpa');
}

// let bola = prompt('O Wallace jogou bolar? ');
// if (bola == 'sim'){
//     // Nesse momento estou chamando a função, ou seja, pedindo para que seja executada.
//     // Basta chamá-la pelo nome.
//     tomarBanho();
// }






function validaNome(){
    let nome = prompt('Qual o seu nome? ');
    while (nome.length < 3){
        console.log('Nome inválido!');
        nome = prompt('Qual o seu nome? ');
    }
}

// validaNome();






// Para passar informações de fora da função para dentro dela, é necessário que eu indique isso na declaração.
// Cada uma dessas informações é chamada de parâmetro, e eu indico o nome pelo qual essa informação vai ser chamada dentro da função
// Nesse exemplo, essa função vai receber 3 valores ao ser chamada, e ela vai tratar esses valores como 'nome', 'num1' e 'num2' respectivamente.
// A ordem que eu passo as informações ao chamar a função é fundamental!!! Pois é essa ordem que vai determinar o que cada um recebe.
function soma(nome, num1, num2){
    if (num1 < 0){
        console.log('Valor negativo!');
    }
    let soma = num1 + num2;
    console.log(`${nome}, a soma é: ${soma}`);
}


// soma('Gabriel', 10, 20);


// let nome = prompt('Qual o seu nome? ')
// let numero1 = +prompt('Digite um número: ');
// let numero2 = +prompt('Digite um número: ');


// soma(nome, numero1, numero2);



// let number1 = +prompt('Digite um número: ');
// let number2 = +prompt('Digite um número: ');

// let n1 = +prompt('Digite um número: ');
// let n2 = +prompt('Digite um número: ');

// soma(nome, number1, number2);
// soma(nome, n1, n2);






/*
Faça um programa, com uma função que necessite de três argumentos: 
dois números e um sinal de operador matemático (+, -, * ou /). 
Ela deve fazer o cálculo indicado pelo operador usando os dois número passados.
*/



console.log();