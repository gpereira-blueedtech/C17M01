// Se o tempo estiver sol, o Pablo vai sair.
// Se estiver nublado, o Pablo vai jogar bola.
// Senão, ele vai jogar video game.

const prompt = require("prompt-sync")();
console.clear()

// Se estiver fazendo sol, o Pablo vai sair.

// let tempo = prompt('Como está o tempo? ')

// // O método toUpperCase transforma a string em maiúscula antes de testar.
// if (tempo.toUpperCase() == 'SOL') {
//     console.log('O Pablo vai sair.');
// } else if (tempo.toUpperCase() == 'NUBLADO') {
//     console.log('O Pablo vai jogar bola.');
// } else {
//     console.log('O Pablo vai jogar video game.');
// }

// let numero = +prompt('Digite um número: ')

// // Nesse caso, ele vai testar as duas condições, independente do resultado da primeira.
// if (numero > 50){
//     console.log('O número é maior que 50')
// } 

// if (numero > 10){
//     console.log('O número é maior que 10')
// }



// // Nesse caso, ele só testa a segunda condição, caso a primeira seja falsa.
// // Caso ela seja verdadeira, a segunda condição é ignorada.
// if (numero > 50){
//     console.log('O número é maior que 50')
// } else if (numero > 10){
//     console.log('O número é maior que 10')
// }

// // Ele só vai testar a condição de dentro caso a primeira seja verdadeira.
// if (numero > 10){
//     if (numero < 50){
//         console.log('O número está entre 10 e 50');
//     }
// }


// let soma = 10 + 10
// console.log(soma)


let teste = 9 >= 10
let testeStr = 'mateus' != 'mateus'

// Quando uso ===, ele compara o valor e também o tipo.
// Quando coloco ==, compara apenas o valor (um Number e uma String com o mesmo valor será true])
let testeFinal = 10 === '10'


// console.log(teste);
// console.log(testeStr)
// console.log(testeFinal)


// // Mesmo que eu não tenha uma condição dentro do if,
// // A var teste deve me trazer o resultado true ou false, por isso ele será válido
// if (teste){
//     console.log('É verdadeiro')
// }






// Se o tempo estiver sol e o Pablo tiver dinheiro, o Pablo vai sair.
// Se estiver nublado, o Pablo vai jogar bola.
// Senão, ele vai jogar video game.


// let tempo = prompt('Como está o tempo? ').toLowerCase()
// let dinheiro = prompt('O Pablo tem dinheiro? ').toLowerCase()
// let amigos = prompt('Os amigos vão sair? ').toLowerCase()

// if (tempo.toUpperCase() == 'SOL') {
//         console.log('O Pablo vai tomar uma.')
// } 



// console.log(tempo == 'sol')
// console.log(dinheiro == 'sim')
// console.log(amigos == 'sim')
// console.log()

// // Quando uso o operador &&, o resultado final só é true se TODAS condições forem true.
// console.log(tempo == 'sol' && dinheiro == 'sim');




// // Quando uso o operador ||, o resultado final é true se PELO MENO UMA das condições for true.
// // Se o tempo estiver sol OU Pablo tiver dinheiro, o Pablo vai sair.
// console.log(tempo == 'sol' || dinheiro == 'sim' || amigos == 'sim');





// let num1 = +prompt('Digite um número: ');
// let num2 = +prompt('Digite outro número: ');
// let soma = num1 + num2

// // Se o valor de soma for NaN (ou seja, o cálculo foi inválido), vai entrar no if
// if (isNaN(soma)){
//     console.log('Não é válido')
// } else {
//     console.log(`A soma é ${soma}`)
// }









//      ### EXERCÍCIOS

/*
1. Faça um Programa que peça dois números e imprima o maior deles, 
e informe caso eles sejam iguais.
*/

let number1 = +prompt('Digite o primeiro número: ');
let number2 = +prompt('Digite o segundo número: ');

if (number1 > number2){
    console.log(number1);
} else if (number2 > number1){
    console.log(number2);
} else {
    console.log('Eles são iguais.')
}


console.log();