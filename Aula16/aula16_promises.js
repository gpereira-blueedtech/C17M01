console.clear()
const prompt = require("prompt-sync")();


// // ## CALLBACKS

// // Essa função vai receber como argumento uma outra função, que será chamada ao final da execução dessa primeira.
// function pedirPizza(callback) {
//     const sabor = prompt('Escolha o sabor da sua pizza: ');
//     // Nesse momento, eu chamo a função que foi passada como parâmetro da primeira, e passo a ela um outro argumento
//     callback(sabor);
// }

// // Essa função irá receber o argumento passado pela função anterior ao chamá-la
// function pizzaPronta(sabor) {
//     console.log(`Sua pizza de ${sabor} está pronta.`);
// }

// function rejeitaPizza(sabor) {
//     console.log(`Desculpa, não temos mais ${sabor}`)
// }

  
// let recheio = prompt('Ainda temos recheio? ');

// if (recheio == 'sim'){
//     // Eu estou chamando uma função e passando uma outra como argumento
//     pedirPizza(pizzaPronta);
// } else {
//     pedirPizza(rejeitaPizza);
// }






// //      ## PROMISES

function primeiraFuncao(parametro) {
    console.log('Bem vindo à função!');

    return new Promise((resolve, reject) => {
        console.log(`Essa é a primeira função, ela escreve: ${parametro}`);
 
        resolve(parametro);
    });
}

// function segundaFuncao(parametro) {
//     return new Promise((resolve, reject) => {
//         const novoparametro = parametro + 10;

//         console.log(`Essa vai adicionar 10, totalizando: ${novoparametro}`);
 
//         resolve(novoparametro);
//     });
// }

// function terceiraFuncao(parametro) {
//     return new Promise((resolve, reject) => {
//         const novoparametro = parametro * 2;

//         console.log(`Essa é a terceira função, ela dobra o valor: ${novoparametro}`);      

//         resolve(novoparametro);
//     });
// }

// function quartaFuncao(parametro) {
//     return new Promise((resolve, reject) => {
//         const novoparametro = parametro - 15;
 
//         console.log(`Essa é a quarta função, subtraindo 15: ${novoparametro}`);
    
//         resolve(novoparametro);
//     });
// }

// primeiraFuncao(10)
//     .then(segundaFuncao)
//     .then(terceiraFuncao)
//     .then(quartaFuncao)
//     .then(console.log);


// // Nesse caso estou pedindo para exibir na tela o que a função me retorna no momento em que é executada
// // Ele não vai me exibir diretamente o resultado, porque ele ainda não está pronto (a função é assíncrona)
// // Ao invés disso, ela me exibe a promessa de que trará um resultado.
// console.log(primeiraFuncao(10));

// // Aqui nós pedimos para que ele execute a primeira função
// // E só após o término dela (quando a promise já tiver sido resolvida),
// // É que ele vai executar o console.log e me exibir o resultado passado.
// primeiraFuncao(10)
//     .then(console.log)




//      ## TRATAMENTO DE EXCEÇÕES

function alteraNome(parametro) {
    console.log('Vamos alterar o nome para maíusculas')
    return new Promise((resolve, reject) => {
        parametro = parametro.toUpperCase();

        resolve(parametro);
    });
}

function escreveNome(parametro) {
    return new Promise((resolve, reject) => {
        console.log(`Aqui está o nome em MAIÚSCULAS: ${parametro}`);

        resolve(parametro);
    });
}

alteraNome(10)
    .then(escreveNome)
    .catch((err) => console.log('Alguma coisa deu errada no caminho...'));







// // Exemplo de execução assíncrona na função setTimeout

// const intro1 = (
// `– Acorde, acorde!
// Uma luz faiscante invade a sua tenda enquanto vc dorme.
// – Acorde, vamos! - repete a voz feminina doce e ao mesmo tempo Régia.`)

setTimeout(function(){
    console.log(intro1)},1500) // O valor númerico passado como argumento é o tempo que vai aguardar (em ms)









console.log();