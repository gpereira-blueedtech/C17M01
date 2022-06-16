console.clear()
const prompt = require("prompt-sync")();

// A declaração async faz com que essa função seja assíncrona
// Por definição, o retorno dela obrigatóriamente é uma promise
// Pois já que ela é assíncrona, o retorno não é imediato, então não tem como
// o resultado ser entregue imediatamente, por isso o que ela retorna é a promessa do resultado.
async function blue(){
    return 'Blue';
}

// // Nesse caso ele vai mostrar na tela a promise, pois não esperou a função assíncrona ser concluída.
// console.log(blue());

// Quando uso o .then, o retorno por definição vai como argumento para o próximo comando
// blue().then(console.log);







//          # AWAIT

// async function saudacao() {
//     const promise = new Promise(resolve => {
//       setTimeout(() => resolve('Olá!'), 3000);
//     });

//     const escrever = await promise;
//     console.log(escrever);
// }

// saudacao();
// console.log('Boa noite!');
// // prompt('Digite: ');






// Essa função serve só para dar erro
async function erro() {
    try {
        // Nesse caso, estou passando apenas o reject da minha função, como se eu forçasse um erro
        await Promise.reject('Deu erro!');
    } catch(e) {
        // No caso de reject, esse erro veio para cá, por isso foi exibido.
        console.log(e);
    }
}
  
erro();



console.log();