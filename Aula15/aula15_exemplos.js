console.clear()
const prompt = require("prompt-sync")();

let lista = [10, 3, 15, 20, 13, 50, 8, 30];

let maior = 0;
for (let i of lista){
    if (i > maior){
        maior = i;
    }
}


let menor = maior;
for (let i of lista){
    if (i < menor){
        menor = i;
    }
}

console.log('Maior:',maior);
console.log('Menor:',menor);



console.log();