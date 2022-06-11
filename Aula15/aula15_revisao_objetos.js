console.clear()
const prompt = require("prompt-sync")();

// let filme = [
//     'Star Wars', 
//     1973, 
//     'George Lucas', 
//     ['Luke Skywalker','Han Solo', 'Princesa Lea'], 
//     true
// ]

// for (let i of filme){
//     console.log(i)
// }

// Criando um objeto, cada chave possui um valor.
let filme1 = {
    nome: 'Star Wars',
    ano: 1973,
    diretor: 'George Lucas',
    personagens: ['Luke Skywalker','Han Solo', 'Princesa Lea'],
    assistido: false,
    avaliacao: 0,

    sabreDeLuz: function(){
        console.log('UOOOOON');
        console.log('UOOOOOOOOONNN');
        console.log('PSHH PSHHH UOOOON');
    },

    darthVader: function(){
        console.log('RRRRRRRRRR');
        console.log('LUKE, EU SOU SEU PAI!');
        
        // Esse método vai chamar outro método do objeto ao final da execução.
        this.sabreDeLuz();
    },

    // Essa função altera o valor de uma propriedade do próprio objeto.
    // Para me referir à ela, eu preciso usar o this.chave.
    assistir: function(){
        console.log(`O filme ${this.nome} foi assistido.`)
        this.assistido = true
    },

    // Esse método recebe um argumento NA HORA QUE FOR CHAMADO, 
    // e esse valor será usado para alterar o valor de uma propriedade do objeto.
    definirAvaliacao: function(nota){
        console.log(`O filme ${this.nome} recebeu a nota: ${nota}`);
        this.avaliacao = nota;
    }
}







// // Dessa forma eu acesso os valores das chaves passadas: objeto.chave
// console.log(filme1.nome);
// console.log(filme1.ano);
// console.log(filme1.personagens);

// // Dessa forma eu posso alterar o valor de uma chave do objeto
// filme1.ano = 1977
// console.log(filme1.ano);


// // Caso eu passe uma chave que ainda não existe no objeto, ela é criada.
// filme1.avaliacao = 5
// console.log(filme1.avaliacao);


// // Nesse caso eu estou excluindo a chave junto com seu valor.
// delete filme1.assistido;
// console.log(filme1.assistido);



// // Eu não consigo usar um 'for of' em um objeto pois ele não é iterável
// // Porém posso usá-lo no valor de uma chave que seja.
// for (let i of filme1.personagens){
//     console.log(i);
// }










// O método keys() me retorna um ARRAY com as chaves (em string) do objeto passado.
// Uma vez que ele é um array, posso armazená-lo e iterar sobre ele (for)
let chavesFilme1 = Object.keys(filme1);

// console.log(chavesFilme1);

// for (let i of chavesFilme1){
//     console.log(i);

//     //Esse for está iterando sobre a lista 'chavesFilme1'. 
//     // Essa é uma lista com as chaves do objeto filme1 no formato STRING.
//     // Ou seja, a forma padrão que usamos para localizar um valor (objeto.chave) não funciona
//     // Porque o nome da chave nesse formato não pode ser uma string.
//     // Uma alternativa, é passa-lo entre [], essa forma aceita string: objeto['chave'];
//     // Como o i é uma string (da minha lista de chaves) tenho que usar essa segunda opção.
//     console.log(filme1[i]);
//     console.log('-----');
// }


// // Os dois terão o mesmo resultado, a diferença é que no segundo caso estou passando o nome da chave como string
// console.log(filme1['personagens']);
// console.log(filme1.personagens);


// // Mesmas informações, com uma visualização mais bacana.
// for (let i of chavesFilme1){
//     console.log(`${i}: ${filme1[i]}`);
// }





// // O método values() me retorna um ARRAY com os valores do objeto passado.
// // Uma vez que ele é um array, posso armazená-lo e iterar sobre ele (for)
// valoresFilme1 = Object.values(filme1);

// // console.log(chavesFilme1);

// for (let i of valoresFilme1){
//     console.log(i);
// }







//          ## MÉTODOS ##


// filme1.sabreDeLuz();
// filme1.darthVader();

// let userNota = +prompt('Qual a avaliação do filme? ');

// filme1.definirAvaliacao(userNota);
// console.log(filme1.avaliacao);

let assistiu = prompt('Você assistiu o filme? ');

if (assistiu == 'sim'){
    filme1.assistir()
}

console.log(filme1.assistido);


console.log();