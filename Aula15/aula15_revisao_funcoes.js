console.clear()
const prompt = require("prompt-sync")();

// O nome que eu uso no parâmetro não tem nada a ver com o valor que ele receberá
// É apenas o nome pelo quais esses valores serão tratados dentro da função.
function jogarDado(faces){
    let resultado1 = Math.ceil(Math.random() * faces);
    let resultado2 = Math.ceil(Math.random() * faces);
       
    // O valor que eu precisar entregar ao final da execução da função
    // deve ser passado como return. Esse valor será retornado ao final
    // e eu posso armazená-lo para fazer o que eu bem entender.
    return [resultado1, resultado2];
}


// let dado = +prompt('Quantas faces terá o dado? ')

// // O valor que será usado dentro da função é esse que é passado como argumento
// // no momento em que ela é chamada.
// // O resultado da função (que foi passado pelo return dentro dela)
// // será armazenado na variável valor.
// let valor = jogarDado([20, 6]);

// console.log(valor);

// if (valor[0] > dado/2){
//     console.log('Você acertou!');
// } else {
//     console.log('Você errou');
// }

// if (valor[1] > dado/2){
//     console.log('O monstro acertou!');
// } else {
//     console.log('O monstro errou');
// }





// function removeElemento(lista, ind){
//     lista.splice(ind, 1);
//     return lista
// }

// function inverteArray(lista){
//     lista.reverse();
//     return lista
// }

// filmes = ['Rambo','Exterminador do Futuro','Duro de Matar'];

// filmes = inverteArray(filmes);
// console.log(filmes);

// // filmes = removeElemento(filmes, 1);
// // console.log(filmes);

console.log();