const prompt = require("prompt-sync")();
console.clear()

/*
Isso é um comentário
O computador não vai interpretar essa linha
Eu uso para deixar comentários, mensagens, etc
Ou posso usar para ignorar uma linha de código que eu não queira executar
Mas também não quero deletar.
*/

// // console.log() é o comando que vai exibir alguma informação na tela.
// console.log('Olá, mundo!');
// // console.log('Meu nome é Vitor "Cold Airsoft" da Silva');

// // // Uso let (ou var, const) quando estou 'criando' a variável.
// let nome = 'Bruno Magalhães';
// let idade = 20
// let cpf = '00055577799'
// let altura = 1.80

// // console.log(nome);
// // console.log(idade);
// // console.log(cpf);

// // Para exibir mais de uma informação, uso vírgula para separar
// console.log('Meu nome é', nome);
// console.log('Minha idade é', idade);
// console.log();


// // Uso typeof para saber qual o tipo de uma variável
// console.log(typeof nome);
// console.log(typeof idade);
// console.log(typeof cpf);

// // Quando a variável já existe, eu não preciso usar o let
// // Apenas chamo pelo nome.
// // Nesse caso estamos atribuindo um novo valor à ela.
// nome = 'Pablo Souza';
// idade = 22

// // // Quando uso + entre duas strings, ele 'concatena', ou seja, junta as duas.
// console.log('Meu nome é' + nome);
// console.log('Minha idade é', idade);





// nome = prompt('Digite seu nome: ');
// let cidade = prompt('Qual a sua cidade? ');

// let turma; // Declarei a variável, mas não atribuí um valor.
// turma = prompt('Qual a sua turma?')


// console.log('Meu nome é ' + nome);
// console.log('Eu moro em', cidade);
// console.log('Eu sou da turma', turma);






//          OPERADDORES

// let num1 = 10
// let num2 = 20

// // Quando uma variável recebe uma operação, ela armazena o resultado.
// let soma = num1 + num2
// console.log(soma)

// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num1 / num2);


// // Por padrão, o prompt armazena tudo como string, mesmo que seja um número
// // Usando +prompt ele armazena o valor como um número, e não string.

let numero1 = +prompt('Digite o primeiro número: ');
let numero2 = +prompt('Digite o segundo número: ');

console.log(typeof numero1)

console.log(numero1 + numero2)
console.log(numero1 - numero2)
console.log(numero1 * numero2)
console.log(numero1 / numero2)


console.log();