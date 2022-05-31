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



let filmes = ['Mad Max', 'Jurassic Park', 'Matrix']

console.log(filmes);

// let novoFilme = prompt('Qual filme deseja adicionar? ');

// // O método push vai adicionar um novo valor ao FINAL da lista.
// filmes.push(novoFilme);


let quantidade = +prompt('Quantos filmes você deseja adicionar? ');
let count = 0

while (count < quantidade){
    let novoFilme = prompt('Qual filme deseja adicionar? ');

    // O método push vai adicionar um novo valor ao FINAL da lista.
    filmes.push(novoFilme);
    count++
}


console.log(filmes);



console.log();