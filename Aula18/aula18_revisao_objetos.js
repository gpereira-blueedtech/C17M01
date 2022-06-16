console.clear()
const prompt = require("prompt-sync")();

let heroi = {
    nome: '',
    altura: 1.8,
    saude: 50,
    forca: 20,
    destreza: 15,
    itens: ['Espada curta', 'Escudo', 'Arco'],
    hora: 8,
    minuto: 0,
    dia: 1,

    mudaSaude: function(pontos){
        this.saude += pontos;
        console.log(`Saúde: ${this.saude}`);
    },

    passaTempo: function(dia, hora, minuto){
        this.dia += dia;
        this.hora += hora;
        this.minuto += minuto;
        if (this.minuto >= 60){
            this.hora++;
            this.minuto -= 60;
        }
    },

    retornaForca: function(){
        return this.forca;
    }
}


prompt('Nosso herói foi atacado por um coelho!')
heroi.passaTempo(0,1,0)
heroi.mudaSaude(-30);

prompt('Ele finalmente conseguiu uma cura')
heroi.passaTempo(0,0,30);
heroi.mudaSaude(20);



console.log(`
1 - Lutar (2 horas)
2 - Comer (45 minutos)
`)

let escolha = prompt('Faça sua escolha: ');

if (escolha == 1){
    heroi.passaTempo(0, 2, 0);
} else if (escolha == 2){
    heroi.passaTempo(0, 0, 45);
}



// Usando o retorno de um método para usar
if (heroi.retornaForca() > 15){
    console.log('Passou no teste! ');
}

console.log(`Hora: ${heroi.hora}:${heroi.minuto}`)


console.log();