const prompt = require("prompt-sync")();
console.clear()

// console.log(
// `HISTORIA DO HEROI
// Assim começa a história

// E ela vai ser contada
// A qualquer momento.

// `
// );

// prompt('Pressione ENTER para continuar.')


// console.clear()

// console.log(`
// Começamos num dia de inverno
// Muito frio mesmo.
// `)

// prompt('Pressione ENTER para continuar.')

// let valor = +prompt('Digite o valor: ')
// let num1 = +prompt('Digite um número: ')
// let num2 = +prompt('Digite outro número: ')

// let compara = valor >= num1 + num2

// console.log(compara);




let senha = prompt('Crie uma senha: ');
console.clear();

let resposta = prompt('Digite sua senha: ');

// if (senha == resposta){
//     console.log('Senha correta!');
//     console.log('Bem vindo ao sistema!!');

//     console.log('Qual o seu nome?');
//     let user = prompt();

//     console.log('Qual a sua idade?')
//     let idade = +prompt();

//     console.log();
    
//     console.log(`Bem vindo(a) ${user}!`);
//     if (idade >= 10 && idade < 18){
//         console.log('Vou te pagar um refri!')
//     } else if (idade >= 18){
//         console.log('Vou te pagar uma cerveja!');
//     } else {
//         console.log("Um copo d'agua tá bom pra você.")
//     }
// } else {
//     console.log('Senha inválida!!');
// }

if (senha == resposta){
    valida = true;
    console.log('Senha correta!');
    console.log('Bem vindo ao sistema!!');

    console.log('Qual o seu nome?');
    let user = prompt();

    console.log('Qual a sua idade?')
    let idade = +prompt();

    console.log();
    
    console.log(`Bem vindo(a) ${user}!`);
    if (idade >= 10 && idade < 18){
        console.log('Vou te pagar um refri!')
    } else if (idade >= 18){
        console.log('Vou te pagar uma cerveja!');
    } else {
        console.log("Um copo d'agua tá bom pra você.")
    }
} else {
    console.log('Senha inválida!!');
}


console.log();