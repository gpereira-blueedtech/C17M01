console.clear()
const prompt = require("prompt-sync")();

// let count = 0;

// while (count < 10){
//     console.log('Repetiu');
//     count++
// }





// // Primeiro (let i = 0): Inicialização. Geralmente usado para declarar uma variável de controle
// // Só é executada uma vez, ao inicializar o for. 
// // Segundo (i < 10): A condição é testada, se for verdadeira o código vai executar
// // Terceiro ({ console.log() }): O código é executado (caso o passo 2 for verdadeiro) 
// // Quarto (i++): Executa a última parte do for, o incremento
// // Ele só é executado após finalizar o código que estava dentro dele 

// // Após o incremento, ele volta ao segundo passo, e repete tudo caso ele seja verdadeiro
// // Caso seja falso, o loop é encerrado.
// for (let i = 0; i < 10; i++){
//     console.log('Repetiu!');
// }


// // Como exemplo. O 'Começou' só seria executado uma vez, 
// // pois o primeiro argumento só é executado na inicialização do for
// // A segunda parte é testar a condição, como nesse exemplo ela é true,
// // Ele sempre vai executar
// // Após isso ele vai executar todo o código dentro das chaves
// // E ao final vai apresentar o 'Terminou', que é a terceira parte
// // Ela sempre é executada depois do código.
// // Após finalizar todo esse ciclo, ele vai testar a condição novamente
// // E repetir tudo caso seja verdadeira.
// for (console.log('Começou!!'); true; console.log('Terminou.')){
//     console.log('Repetiu');
//     if (prompt() == '0'){
//         break
//     }
// }





// let quantidade = +prompt('Quantas vezes quer repetir? ')
// for (let i = 0; i < quantidade; i++){
//     console.log('Repetiu!');
// }





//      ### FOR OF ###


let filmes = [
    'Jurassic Park',
    'Indiana Jones',
    'Matrix',
    'Star Wars',
    'O Quinto Elemento',
    'O Senhor dos Anéis',
    'Duro de Matar',
    'Caça-Fantasmas'
]

// let count = 0

// while (count < filmes.length){
//     console.log(filmes[count])
//     count++
// }


// // O for of vai percorrer um objeto iteravel(ex: uma lista), sendo que a cada vez
// // A variável de controle (ex: i) receberá um valor do objeto 
// // Começando do índice 0 até o último.
// for (let i of filmes){
//     console.log(i);
// }





// let numeros = []
// let soma = 0;

// // Definindo a quantidade de vezes do for indexado
// let quantidade = +prompt('Quantos números deseja adicionar? ');

// // Construindo a lista. Esse ciclo vai ser repetido a quantidade de vezes escolhida
// for (let i = 0; i < quantidade; i++){
//     // A cada repetição o usuário entra com um número
//     let numero = +prompt('Digite um número: ');
//     // O número entrado é adicionado à lista numeros
//     numeros.push(numero);
// }

// // O for of irá percorrer toda a lista de números
// // E a cada repetição a variável de controle vai receber um valor da lista
// for (let i of numeros){
//     // Somo o valor que a variável está recebendo no momento com o total
//     soma += i
// }

// // Divido a soma total dos valores pela quantidade de números digitados.
// console.log(soma / numeros.length)

// console.log();







// for (let i in filmes){
//     console.log(`O filme do índice ${i} é: ${filmes[i]}`);
//     let escolha = prompt('Deseja remover esse filme? ');
//     if (escolha == 'sim'){
//         filmes.splice(i,1)
//         escolha = prompt('Deseja adicionar outro filme no lugar? ');
//         if (escolha == 'sim'){
//             let filme = prompt('Digite o nome do filme: ');
//             filmes.splice(i,0, filme)
//         }
//     }
//     console.log();
// }

// console.log(filmes);






// let perguntas = [
//     'Você é amigo do cara lá? ',
//     'Você gosta de refrigerante sem açucar? ',
//     'Você coloca o feijão por cima do arroz? '
// ]

// let respostas = [];

// for (let i of perguntas){
//     console.log(i);
//     respostas.push(prompt());
// }

// console.log(respostas);





//      ### EXERCÍCIOS!!

/*
3. Faça um programa que peça um número e imprima 
toda a tabuada dele do 1 ao 10.
*/

// let num = +prompt('Digite o número para ver sua tabuada: ');

// for (let i = 1; i <= 10; i++){
//     console.log(num * i);
// }




/*
1.
Peça ao usuário uma quantidade de linhas e 
outra de colunas, e imprima essas informações na 
forma de uma tabela 
como no exemplo de 3 linhas e 4 colunas:
[ 0, 1, 2, 3 ]
[ 1, 2, 3, 4 ]
[ 2, 3, 4, 5 ]
*/

let linhas = +prompt('Quantas linhas? ');
let colunas = +prompt('Quantas colunas? ');

let arrayLinhas = [];

for (let i = 0; i < linhas; i++){
    let arrayColunas = [];
    for (let a = 0; a < colunas; a++){
        arrayColunas.push(a + i);
    }
    arrayLinhas.push(arrayColunas)
}

for (let i of arrayLinhas){
    console.log(i)
}


console.log();