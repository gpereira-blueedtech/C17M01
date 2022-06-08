console.clear()
const prompt = require("prompt-sync")();

// Uma função pode receber valores de fora dela, através dos parâmetros
// Eu posso usar quantos parâmetros forem necessários, e eles serão tratados por esse nome
// Dentro da função. O nome não precisa ter nenhuma relação com o valor passado
// O importante é me atentar à ORDEM dos valores (argumentos).

// Os parâmetros podem ter um valor padrão, 
// assim quando a função for chamada, caso esse argumento não tenha sido passado, ele assume o valor padrão.
function verificaPar(num, nome = 'Usuario'){
    if (num % 2 == 0){
        console.log(`${nome}, o número ${num} é par!`);
    } else {
        console.log(`${nome}, o número ${num} é ímpar!`);
    }
}

// let nome = prompt('Digite seu nome: ');
// // let numero = +prompt('Digite um número: ');

// // Ao passar o valor do argumento, devo sempre me atentar à ordem correta!!!
// verificaPar(nome);




//          ## RETORNO ##


// // Exemplo de um método que me retorna um valor, e eu posso armazená-lo.
// lista1 = ['Mateus', 'Ricardo', 'Yris', 'Wallace'];

// let removido = lista1.pop()

// console.log(lista1);
// console.log(removido);








function soma(a, b){
    let resultado = a + b;
    // console.log(resultado);

    // Esse é o valor que a função irá RETORNAR, ou seja, 
    // o que será entregue como resultado da função.
    // Uma função só pode retornar UM valor.
    return resultado;
}

// let num1 = +prompt('Digite um número: ');
// let num2 = +prompt('Digite um número: ');

// let result = soma(num1, num2);

// console.log(result);

// if (result > 0){
//     console.log('O resultado é maior que 0')
// }





// function verificaParNova(num){
//     if (num % 2 == 0){
//         // console.log(`O número ${num} é par!`);
//         return true
//     } else {
//         // console.log(`O número ${num} é ímpar!`);
//         return false
//     }
// }

// let numero = +prompt('Digite um número: ');

// let verificado = verificaParNova(numero);
// console.log(verificado)





// como fatiar uma string
let data = prompt('Digite a data [dd/mm/aaaa]: ');

let datasplit = data.split('/')

console.log(datasplit)

console.log();