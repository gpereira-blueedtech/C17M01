const prompt = require("prompt-sync")();
console.clear()

// let senha = '123'
// let resposta = prompt('Digite a senha: ');

// // O while testa uma condição e ENQUANTO ela for verdadeira, ele vai repetir a execução.
// // é interessante então que eu tenha dentro do código alguma coisa que me permita 'sair' desse loop
// // Nesse caso, estou tendo a oportunidade de alterar a variavel resposta, para que a condição possa ser false.
// while (resposta != senha) {
//     console.clear();
//     console.log('Senha incorreta!');
//     resposta = prompt('Digite a senha: ');
// } 




// let usuario;

// // O do... while vai funcionar da mesma forma, porém vai primeiro executar o código, para depois testar a condição
// // Na prática, isso significa que o código sempre será executado pelo menos uma vez.
// do {
//     usuario = prompt('Digite o seu nome: ')
// } while (usuario.length < 3)






// let count = 0;

// while (count < 10){
//     count ++
//     console.log('Repetiu!', count);
// }






// let pwd = '123'
// let enter = prompt('Digite a senha: ')
// let contagem = 0;

// while (enter != pwd){
//     contagem++
//     console.log('Senha incorreta!');

//     // Se errar 3 vezes, sai.
//     if (contagem == 3){
//         console.log('Número de tentativas excedido!')
//         console.log('Encerrando o programa.');
//         prompt();
//         break;
//     }

//     enter = prompt('Digite a senha novamente: ');
// }







// while (true){
//     console.clear();
//     console.log('Bem vindo(a) à Naruto Air Lines');
//     console.log('Você tem interesse em conhecer propostas de viagem? ');
//     let viajar = prompt();
//     if (viajar == 'sim'){
//         console.log('Ok, vamos apresentar algumas opções');
//         console.log('Quando você costuma gastar em viagens? ')
//         let valor = + prompt();
//         if (valor >= 2000){
//             console.log('Opa! Que tal uma passagem pra Vila da Folha? ');
//             let pacote = prompt('Deseja fechar o pacote? ')
//             if(pacote == 'sim'){
//                 console.log('Aqui está sua passagem');
//                 prompt();
//                 // O continue vai reiniciar o ciclo. Ele encerra a execução atual e volta para o teste inicial do while
//                 continue;
//             }
//         } else if (valor >= 1000){
//             console.log('Temos pacotes interessantes para a Akatsuki');
//             let pacote = prompt('Deseja fechar o pacote? ')
//             if(pacote == 'sim'){
//                 console.log('Aqui está sua passagem');
//                 prompt();
//                 // O continue vai reiniciar o ciclo. Ele encerra a execução atual e volta para o teste inicial do while
//                 continue;
//             }
//         } else if (valor >= 100) {
//             console.log('Da pra ir pra Acapulco');
//             let pacote = prompt('Deseja fechar o pacote? ')
//             if(pacote == 'sim'){
//                 console.log('Aqui está sua passagem');
//                 prompt();
//                 // O continue vai reiniciar o ciclo. Ele encerra a execução atual e volta para o teste inicial do while
//                 continue;
//             }
//         } else {
//             console.log('Aí fica difícil né patrão. Vai ter que ficar no Netflix');
//             let pacote = prompt('Deseja fechar o pacote? ')
//             if(pacote == 'sim'){
//                 console.log('Aqui está sua passagem');
//                 prompt();
//                 // O continue vai reiniciar o ciclo. Ele encerra a execução atual e volta para o teste inicial do while
//                 continue;
//             }
//         }
//     } else {
//         console.log('Que pena. Mas tá bom.')
//     }

//     let sair = prompt('Deseja sair? ');
//     if (sair == 'sim'){
//         let senha = prompt('Digite a senha para encerrar: ')
//         if (senha == 'Kakashi'){
//             break;
//         } else {
//             console.log('Senha incorreta.')
//             prompt();
//         }
//     }
// }







//              ## EXERCÍCIOS
/*
Faça um programa que leia e valide as seguintes informações:

Nome: maior que 3 caracteres;
Idade: entre 0 e 150;
Salário: maior que zero;
Estado Civil: 's', 'c', 'v', 'd';

Caso o usuário digite algum dado inválido, ele deve retornar ao início do programa.
*/

// // Original, sem voltar ao começo.
// let nome = prompt('Qual o seu nome? ');
// while (nome.length < 3){
//     console.log('Nome inválido. Digite um nome com pelo menos 3 caracteres.')
//     nome = prompt('Qual o seu nome? ');
// }

// let idade = +prompt('Qual a sua idade?');
// while (idade <= 0 || idade > 150){
//     console.log('Idade inválida! Digite um valor entre 0 e 150.')
//     idade = +prompt('Qual a sua idade?');
// }

// let salario = +prompt('Qual o seu salário?');
// while (salario <= 0){
//     console.log('Salário inválido! Digite um valor maior que 0.')
//     salario = +prompt('Qual o seu salário?');
// }

// let estadoCivil = prompt('Qual o seu estado civil? ');
// while(estadoCivil != 's' && estadoCivil != 'c' && estadoCivil != 'v' && estadoCivil != 'd' ){
//     console.log('Estado civil inválido! Digite s, c, v ou d');
//     estadoCivil = prompt('Qual o seu estado civil? ');
// }



// // Exercício alterado, contando erros e voltando sempre que errar.
let erro = 0;

while(true){
    console.clear()

    if (erro == 3) {
        console.log('Você errou demais. Vou parar com isso.');
        prompt();
        break;
    }

    let nome = prompt('Qual o seu nome? ');
    if (nome.length < 3){
        console.log('Nome inválido. Digite um nome com pelo menos 3 caracteres.');
        erro++
        continue;
    }

    let idade = +prompt('Qual a sua idade?');
    if (idade <= 0 || idade > 150){
        console.log('Idade inválida! Digite um valor entre 0 e 150.');
        erro++
        continue;
    }

    let salario = +prompt('Qual o seu salário?');
    if (salario <= 0){
        console.log('Salário inválido! Digite um valor maior que 0.');
        erro++
        continue;
    }

    let estadoCivil = prompt('Qual o seu estado civil? ');
    if (estadoCivil != 's' && estadoCivil != 'c' && estadoCivil != 'v' && estadoCivil != 'd' ){
        console.log('Estado civil inválido! Digite s, c, v ou d');
        erro++
        continue;
    }

    let continuar = prompt('Deseja cadastrar outro usuário?');
    if (continuar == 'nao'){
        break;
    } else {
        erro = 0
    }
}







// let numero = '500.5'
// console.log(typeof numero);
// console.log(numero);

// // parseFloat irá transformar a string em um número float
// numero = parseFloat(numero);
// console.log(typeof numero);
// console.log(numero);


// // parseInt irá transformar a string em um número inteiro
// numero = parseInt(numero);
// console.log(typeof numero);
// console.log(numero);

console.log();