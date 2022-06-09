console.clear()
const prompt = require("prompt-sync")();

let nomes = [
    'Mateus', 
    'Michel', 
    'Deise',
    'Wagner',
    'Felipe'
]

let telefones = [
    '222-555',
    '333-555',
    '555-999',
    '111-222',
    '888-777'
]



let agenda = {
    Mateus: ['222-555', '333-444'],
    Michel: '333-555',
    Deise: '555-999',
    Wagner: '111-222',
    Felipe: '888-777'
}

// console.log(agenda.Mateus);
// console.log(agenda.Michel);


// Um objeto é uma coleção de itens, onde cada uma é chamado de 'propriedade'
// Cada propriedade de um objeto recebe uma CHAVE e um VALOR.
// Esse objeto não é indexado e nem iterável. 
// Ou seja, não é possível localizar um valor pelo índice, nem usar um 'for of' nele.
// let pessoa = {
//     nome: 'Mateus',
//     idade: 30,
//     cidade: 'São Paulo',
//     altura: 1.73,
//     fome: false,
//     hobbies: ['Cinema','Ler','Música'],
//     pais: {pai: 'Ademir', mae: 'Lucia'}
// }


// // Para acessar o valor de uma chave usamos objeto.chave:
// console.log(pessoa.nome);
// console.log(pessoa.idade);

// // Esse valor pode ser armazenado.
// let variavel = pessoa.nome;
// console.log(variavel);


// console.log(pessoa);

// // Podemos alterar o valor de uma propriedade apenas atribuindo um novo à chave.
// pessoa.nome = 'Carlos'
// console.log(pessoa);

// // Se a chave não existir no objeto, ela será criada.
// pessoa.turma = 'C17'
// console.log(pessoa);

// // Para excluir uma chave, basta usar delete:
// delete pessoa.fome








// // Construindo um novo objeto
// let aluno = {}

// aluno.nome = 'Carlos'
// aluno.turma = 'C17'
// aluno.idade = +prompt('Qual a idade do aluno? ');

// console.log(aluno)








// EXERCICIOS
/*
2. Crie um sistema de cadastro de funcionários que deve perguntar 
quantos funcionarios serão cadastrados e criar um objeto novo 
para cada funcionário cadastrado com as informações: nome, cargo e salário. 
Ele deve armazenar todos esses objetos em uma lista.
*/

// let qtd = +prompt('Quantos funcionários deseja cadastrar? ');
// let listaFunc = [];

// for (let i = 0; i < qtd; i++){
//     let nome = prompt('Qual o nome? ');
//     let cargo = prompt('Qual o cargo? ');
//     let salario = prompt('Qual o salário? ');

//     let funcionario = {
//         nome: nome,
//         cargo: cargo,
//         salario: salario
//     }

//     // Outra maneira:
//     // let funcionario = {};
//     // funcionario.nome = nome;
//     // funcionario.cargo = cargo;
//     // funcionario.salario = salario;

//     // // Outra maneira: (nesse caso não preciso das variáveis que peguei no início)
//     // let funcionario = {
//     //     nome: prompt('Qual o nome? '),
//     //     cargo: prompt('Qual o cargo? '),
//     //     salario: prompt('Qual o salário? ')
//     // }

//     listaFunc.push(funcionario);
// }

// for (let i of listaFunc){
//     console.log(`Cadastro:`);
//     console.log(i);
//     console.log();
// }






// let pessoa = {
//     nome: 'Mateus',
//     idade: 30,
//     cidade: 'São Paulo',
//     altura: 1.73,
//     fome: true,
//     hobbies: ['Cinema','Ler','Música'],
//     pais: {pai: 'Ademir', mae: 'Lucia'},

//     // Uma propriedade pode ser uma função.
//     // Nesse caso, damos a ela o nome de método.
//     cumprimentar: function(){
//         console.log('Olá gente!!!');
//         // Para me referir à uma propriedade do próprio objeto, uso this.chave
//         console.log(`Eu sou o ${this.nome}`);
//         console.log(`E minha idade é ${this.idade} anos.`)
//     },

//     envelhecer: function(anos = 1){
//         this.idade = this.idade + anos;

//         // Outra maneira de escrever: 
//         // this.idade += anos;
//     },

//     alimentar: function(){
//         this.fome = false;
//     },

//     verificarFome: function(){
//         return this.fome;
//     }
// }


// // pessoa.cumprimentar();

// // pessoa.envelhecer(5);
// // console.log();

// // pessoa.cumprimentar();

// if (pessoa.verificarFome()){
//     console.log(`A pessoa está com fome`)
// } else {
//     console.log(`A pessoa está sem fome`)
// }

// pessoa.alimentar();

// if (pessoa.verificarFome()){
//     console.log(`A pessoa está com fome`)
// } else {
//     console.log(`A pessoa está sem fome`)
// }






/*
Crie um objeto pessoa com os atributos: nome, idade, peso e altura.
Além disso ela deve ter os métodos: Envelhecer, engordar, emagrecer, crescer. 
Por padrão, a cada ano que nossa pessoa envelhece até os 21 anos, ela deve crescer 0,5 cm. 
Crie um método bio que retorna uma string com todas as informações da pessoa.
*/

let nome = prompt('Qual o nome? ');
let idade = +prompt('Qual a idade? ');
let peso = +prompt('Qual o peso? ');
let altura = +prompt('Qual a altura? ')

let pessoa = {
    nome: nome,
    idade: idade,
    peso: peso,
    altura: altura,

    envelhecer: function(anos = 1){
        let anoscresc = anos;
        
        if(this.idade + anos > 21){
            anoscresc = 21 - this.idade;
        }

        if(this.idade < 21){
            this.idade += anos;
            this.altura += 0.05 * anoscresc;
        } else {
            this.idade += anos;
        }
    },

    engordar: function(quilos = 1){
        this.peso += quilos;
    },

    emagrecer: function(quilos = 1){
        this.peso -= quilos;
    },

    crescer: function(cm = 1){
        this.altura += cm
    },

    bio: function(){
        console.log(`Nome: ${this.nome}`);
        console.log(`Idade: ${this.idade}`);
        console.log(`Peso: ${this.peso}`);
        console.log(`Altura: ${this.altura}`);
    }
}

pessoa.bio();
pessoa.engordar();
pessoa.envelhecer(5);
console.log();

pessoa.bio();


console.log();