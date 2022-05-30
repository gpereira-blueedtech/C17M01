const prompt = require("prompt-sync")();
console.clear()

// // O método toLowerCase() vai armazenar a variável já em minúsculas.
// // O método trim() vai cortar os espaços do começo e do fim.
// let nome = prompt('Digite "Blue": ').toLowerCase().trim();
// console.log(nome);

// while (nome == 'Blue'.toLowerCase()){
//     console.log('Você digitou certo!!!');
//     nome = prompt('Digite outra coisa: ').toLowerCase().trim();
// }







// let numero = +prompt('Digite um número entre 1 e 10: ');

// while (numero < 10){
//     console.log(numero);

//     if (numero % 2 != 0){
//         console.log('É ímpar!');
//         console.log();

//         numero++
//         continue;
//     }

//     console.log('É isso aí. Par.');
//     console.log();

//     if (numero == 6){
//         break;
//     }

//     numero++
// }





// Podemos dar um 'nome' para o nosso ciclo. Chamamos isso de Label.
// Assim, quando usamos break ou continue, podemos identificar qual ciclo desejamos encerrar.
principal: while (true){
    let nome = prompt('Digite o nome do usuário: ');
    console.log(`Olá ${nome}!`);

    let senha = prompt('Digite a senha: ');
    while (senha != 'Blue123'){
        console.log('Senha incorreta!!');
        let sair = prompt('Deseja sair? ');
        if (sair == 'sim'){
            // Aqui eu estou pedindo para encerrar o ciclo 'principal', que foi definido lá em cima.
            // Caso não tivesse definido esse nome, ele encerraria o ciclo mais interno (o da linha 54)
            break principal;
        }
        senha = prompt('Digite a senha: ');
    }

    console.log();
    let sair = prompt('Deseja sair do sistema? ');
    if (sair == 'sim'){
        break;
    }
}



console.log();