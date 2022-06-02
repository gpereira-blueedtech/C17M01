console.clear()
const prompt = require("prompt-sync")();

// Para declarar uma lista, basta colocar os valores envoltos em []
// Para melhorar a visualização, posso quebrar a linha entre um valor e outro, sem esquecer da vírgula
let filmes = [
    'Jurassic Park',
    'Indiana Jones',
    'Matrix',
    'Star Wars',
    'O Quinto Elemento',
    'O Senhor dos Anéis'
]

// console.log(filmes);

// // Os elementos de uma lista são indexados, isso quer dizer que eles possuem um índice
// // Ou seja, a posição de um elemento dentro da lista importa, pois é através dessa posição que ele será localizado
// console.log(filmes.length)
// console.log(filmes[0]);

// // // Para localizar o último índice de uma lista, basta saber o seu tamanho -1.
// console.log(filmes[filmes.length -1]);





// // Me retorna o tamanho (quantidade de itens) da lista
// let tamanho = filmes.length;
// // console.log(typeof tamanho);
// console.log(tamanho);

// // O último índice de uma lista sempre é 1 número a menos que o seu tamanho
// // Porque o tamanho começa a contar no 1, e o índice começa no 0.
// let ultimoIndice = tamanho - 1;
// console.log(ultimoIndice);

// // Aqui eu tenho um exemplo de acesso ao último item (tamanho - 1)
// console.log(filmes[ultimoIndice])










let filmesAno = [
    'Jurassic Park',
    'Indiana Jones',
    'Matrix',
    'Star Wars',
    'O Quinto Elemento',
    'O Senhor dos Anéis',
    [1993,1988,1994,1976,1996,2000] // Essa lista conta como apenas 1 elemento dentro da maior
]


// console.log(filmesAno.length);
// console.log(filmesAno[6]);

// // O elemento no índice 6 é uma lista, e eu posso salvá-la em uma variável
// let listaAnos = filmesAno[6]
// console.log(listaAnos[2]);

// // Dessa forma, estou acessando o elemento índice 6(que é uma lista) e acessando o índice 2 dentro dele.
// console.log(filmesAno[6] [2]);



// // Esse elemento é uma string, então posso usar qualquer coisa que usaria com uma string
// console.log(filmesAno[0].toUpperCase());

// // Esse elemento é uma lista, então posso fazer qualquer coisa que faria com uma lista (métodos ou acessar elementos)
// console.log(filmesAno[6].length);

// // Esse elemento é um número, então posso fazer cálculos com ele.
// console.log(2022 - (filmesAno[6] [2]));





// console.log(filmesAno);

// // Para alterar o valor de um elemento, basta passar 
// // o seu índice e atribuir o novo valor.
// filmesAno[0] = 'Harry Potter';
// filmesAno[6] [0] = 2001;

// console.log(filmesAno);




// let listaNumeros = [10, 13, 15, 20, 30, 35, 40];
// let count = 0
// let soma = 0;

// // Como estou usando o tamanho da lista na condição,
// // Ela será percorrida inteira, não importa o tamanho.
// while (count < listaNumeros.length){
//     console.log(listaNumeros[count]);
//     soma = soma + listaNumeros[count]
//     // A cada repetição o valor de count aumenta em 1
//     // Por isso que sempre ele traz o próximo índice
//     count++
// }

// console.log(soma);
// console.log('Média:', soma / listaNumeros.length)






// let listaIdades = [];
// let count = 0;
// let soma = 0;

// while (count < 5){
//     let novaIdade = +prompt('Digite a idade: ');
//     // Esse operador vai 
//     soma += novaIdade;
//     // Outro jeito de fazer a mesma coisa:
//     // soma = soma + novaIdade;
//     listaIdades.push(novaIdade)
//     count++
// }


// console.log(listaIdades);
// console.log(typeof soma);
// console.log('Média:', soma/listaIdades.length)





// console.log(filmesAno);

// // Splice: A partir do índice * remova ** itens e adicione ***
// // * - 1º argumento
// // ** - 2º argumento
// // *** - 3º+ argumento(s)
// // Ele retorna os elementos removidos, então posso armazená-los em uma variável
// let removidos = filmesAno.splice(2, 2, '2001','Platoon');
// console.log();

// console.log(removidos);
// console.log(filmesAno);


// // O método indexOf vai me retornar o 1º índice encontrado do elemento passado
// console.log(filmesAno.indexOf('Star Wars'));

// let filmeRemov = prompt('Qual filme remover? ')

// // Posso passar o elemento em uma variável
// let posicao = filmesAno.indexOf(filmeRemov)

// // Após saber o índice do elemento, posso usar como argumento no splice
// filmesAno.splice(posicao, 1);
// console.log(filmesAno);








// let filmeUser = prompt('Qual filme deseja verificar? ')

// let posicaoFilme = filmesAno.indexOf(filmeUser);

// if (posicaoFilme == -1){
//     console.log('Filme não encontrado.')
//     let adicionar = prompt('Deseja adicionar? ');
//     if (adicionar == 'sim'){
//         filmesAno.push(filmeUser);
//     } 
// } else {
//     console.log('Filme encontrado!');
//     let remover = prompt('Deseja remover? ');
//     if(remover == 'sim'){
//         filmesAno.splice(posicaoFilme, 1)
//     }
// }
//
// console.log(filmesAno);




console.log();