console.clear()
const prompt = require("prompt-sync")();

// Uma lista pode guardar vários valores dentro dela.
let alunos = ['Yris', 'Joao Victor', 'Elton'];

// Esses valores podem ser strings, números, booleans ou até outra lista!
let idades = [20, 22, 18];

// // Essa variável será passada para dentro da array.
// let novo = prompt('Digite o novo nome: ')

// // Posso escrever uma lista quebrando as linhas entre cada valor.
// // Não esqueço de usar a vírgula após
// // Isso não altera a visualização no terminal.
// let c17 = [
//     'Yris', 
//     20, 
//     'Joao Victor', 
//     22, 
//     'Elton', 
//     18, 
//     true, 
//     ['Fernando', 21, 'Vanderlei', 23],
//     novo
// ]

// // console.log(alunos);
// // console.log(idades);
// // console.log(c17);

// // console.log();

// // // Esse método vai retornar o tamanho da array, ou seja, quantos elementos ela tem.
// console.log(c17.length);
// console.log(c17)


// // Para acessar um valor específico dentro da array, devo chamá-lo pelo índice,
// // Lembrando que os índices começam pelo 0.
// // O valor retornado pelo índice da lista pode ser armazenado em uma variável
// let nome1 = c17[0];
// console.log(typeof nome1);


// // O último índice de uma lista é sempre igual ao seu tamanho - 1.
// // console.log(c17[c17.length - 1])

// console.log(c17);

// // Para atribuir um novo valor ao índice de uma variável, basta passar esse índice atribuindo o valor.
// c17[2] = 'Carlos'
// c17[7][0] = 'Claudio';

// console.log(c17);



// let trocar = prompt('Deseja trocar algum elemento? ');

// if (trocar == 'sim'){
//     let indice = +prompt('Qual índice deseja alterar? ');
//     let valor = prompt('E qual o valor deseja adicionar? ');

//     c17[indice] = valor
// }

// console.log(c17);



// let filmes = ['Mad Max', 'Jurassic Park', 'Matrix']

// console.log(filmes);

// let novoFilme = prompt('Qual filme deseja adicionar? ');

// // O método push vai adicionar um novo valor ao FINAL da lista.
// filmes.push(novoFilme);






// let quantidade = +prompt('Quantos filmes você deseja adicionar? ');
// let count = 0

// while (count < quantidade){
//     let novoFilme = prompt('Qual filme deseja adicionar? ');

//     // O método push vai adicionar um novo valor ao FINAL da lista.
//     filmes.push(novoFilme);
//     count++
// }

// console.log(filmes);






//          ### EXERCICIOS

/*
Faça um Programa que leia 20 números inteiros e armazene-os num array. 
Armazene os números pares no array PAR e os números IMPARES no array IMPAR.
Imprima os três vetores.
*/

// let contador = 0
// let arrayGeral = [];
// let arrayPar = [];
// let arrayImpar = [];
// let limite = 10

// while (contador < limite){
//     let numero = +prompt('Digite um número: ');
//     arrayGeral.push(numero);
//     contador++

//     if (numero % 2 == 0){
//         arrayPar.push(numero);
//     } else {
//         arrayImpar.push(numero);
//     }
// }

// console.log('Array GERAL:');
// console.log(arrayGeral);

// console.log('Array PARES:');
// console.log(arrayPar);

// console.log('Array IMPARES:');
// console.log(arrayImpar);





// // Dessa forma eu consigo percorrer uma lista inteira, independente do número de elementos.
// // A cada ciclo do while, ele vai acessar um elemento diferente da lista.
// let countLista = 0
// let filmes = [
//     'Mad Max', 
//     'Jurassic Park', 
//     'Matrix',
//     'O Exorcista',
//     'Bacurau',
//     'O Auto da Compadecida'
// ]
// let limiteLista = filmes.length


// while (countLista < limiteLista){
//     console.log(filmes[countLista]);
//     countLista++
// }






let filmes = [
    'Mad Max', 
    'Jurassic Park', 
    'Matrix',
    'O Exorcista',
    'Bacurau',
    'O Auto da Compadecida'
]

// let filmeNovo = prompt('Qual filme deseja adicionar? ');

// // Similar ao push(), porém adiciona o novo item ao início da lista.
// // Nesse caso, todos os índices dos elementos que já estavam presentes são alterados.
// filmes.unshift(filmeNovo);

// console.log(filmes);



console.log(filmes);
console.log();
let removidos = []

// filmes.pop();
let removido = filmes.pop();
removidos.push(filmes.pop())



console.log(filmes);
console.log(removido);
console.log(removidos);


console.log();