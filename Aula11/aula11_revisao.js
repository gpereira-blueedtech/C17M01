console.clear()
const prompt = require("prompt-sync")();

// // while
// // Geralmente é usado em situações onde o script será executado
// // Uma quantidade indefinida de vezes. 
// // A quantidade será determinada pela condição.



// let num = 0

// while (num < 10){
//     console.log('Repetiu');
//     num++
// }



// let nome = prompt('Digite o seu nome: ');

// while (nome.length < 3){
//     console.log('Nome inválido');
//     nome = prompt('Digite o seu nome: ');
// }




// // For
// // O loop for geralmente é usado quando temos uma quantidade determinada de repetições

// let inicial = +prompt('Digite o número inicial: ')
// let final = +prompt('Digite o número final: ')
// let lista = [];

// while (inicial >= final){
//     console.log('Entradas inválidas. Digite novamente.');
//     inicial = +prompt('Digite o número inicial: ')
//     final = +prompt('Digite o número final: ')
// }

// // Primeira parte: Crio a variável de controle (executada apenas uma vez).
// // Segunda parte: Condição para a execução. Nesse caso é usado uma quantidade de vezes. Executado antes de cada repetição.
// // Terceira parte: Incremento. Serve para modificar a variável de controle. Executado após todo o código do corpo.
// for (let i = inicial; i <= final; i++){
    
//     // Verifico se o número é par, caso seja, adiciono à lista.
//     if (i % 2 == 0){
//         lista.push(i);
//     }
// }

// console.log(lista);





// let validaNum = false;
// let validaEsp = false;
// let validaMai = false;

// let senha = prompt('Digite uma senha contendo @: ')

// // if (senha.toLowerCase().includes('@')){
// //     validaEsp = true;
// //     console.log('Senha válida!');
// // }

// let caracteres = '@#$%&';
// let numeros = '0123456789';
// let maiusculas = 'ABCDEFGHIJKLMOPQRSTUVWXYZ'

// for (let i of senha){
//     if(caracteres.includes(i)){
//         validaEsp = true;
//     }

//     if(numeros.includes(i)){
//         validaNum = true;
//     }

//     if(maiusculas.includes(i)){
//         validaMai = true;
//     }
// }

// if(validaEsp && validaNum && validaMai){
//     console.log('Senha válida!');
// }



let troca = false;

let comidas = [
    'Pé de moleque',
    'Paçoca',
    'Doce de abóbora',
    'Pipoca',
    'Pamonha'
]
let comidasWallace = [];



// // Usando o for...of ele percorre a lista toda, e a cada repetição assume o valor de um item.
// for (let i of comidas){
//     console.log(`O Wallace gosta de ${i}?`);
//     let resposta = prompt();
//     if (resposta == 'sim'){
//         comidasWallace.push(i)
//     } else {
//         if (troca == false){
//             console.log('Deseja trocar? ');
//             let resposta = prompt();
//             if (resposta == 'sim'){
//                 troca = true;
//             }
//         }
//     }
//     console.clear();
// }

// console.log(`O Wallace gosta de: `)
// for (let i of comidasWallace){
//     console.log(i)
// }




// // Usando o for...in, ele percorre a lista toda, e a cada repetição assume o índice do elemento.
// // Sabendo o índice, é facil acessar o valor desse item.
// for (let i in comidas){
//     console.log(`O Wallace gosta de ${comidas[i]}?`);
//     let resposta = prompt();
//     if (resposta == 'sim'){
//         comidasWallace.push(comidas[i])
//     } else {
//         if (troca == false){
//             console.log('Deseja trocar? ');
//             let resposta = prompt();
//             if (resposta == 'sim'){
//                 let novacomida = prompt('Qual a nova comida? ');
//                 // Argumentos do splice:
//                 // 1 - Indice a ser aplicado
//                 // 2 - Quantidade de itens a remover
//                 // 3+ - Novos itens a serem adicionados
//                 comidas.splice(i, 1, novacomida)
//                 troca = true;
//             }
//         }
//     }
//     console.clear();
// }

// console.log();

// for (let i of comidas){
//     console.log(i)
// }







while(true){
    console.clear();
    for (let i of comidas){
        console.log(i);
    }

    console.log('Qual comida deseja substituir? [0 para sair] ');
    let remove = prompt();
    if(remove == 0){
        break;
    }

    let indiceremove = comidas.indexOf(remove);
    
    if(indiceremove == -1){
        console.log('Entrada inválida!');
        prompt();
    } else {
        let comidanova = prompt('Qual a nova comida? ');
        comidas.splice(indiceremove, 1, comidanova);
    }
}

console.log();