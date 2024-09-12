const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-pergunta');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');

const perguntas = [//abre a lista de objetos (itens)
    {//abre o item
        enunciado:"Voce gosta de estudar?",
        alternativas:["Sim","Nao"]
    },
    {
        enunciado:"Voce gosta de portugues",
        alternativas:["Sim","Alternativa 2"]
    },
    {
        enunciado:"Voce gosta de matematica",
        alternativas:["SIm","Nao"]
    }
]
let posicao = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[posicao];
    caixaPergunta.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas(){
    for
}