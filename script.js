const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-pergunta');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');

const perguntas = [//abre a lista de objetos (itens)
    {//abre o item
        enunciado:"Você gosta de matar aula",
        alternativas:["Sim","Yes"]
    },
    {
        enunciado:"Você acha o Joao Eduardo bonito",
        alternativas:["Sim","eu morreria por ele"]
    },
    {
        enunciado:"Você gosta de gatos",
        alternativas:["Sim","Queria um"]
    }
]
let posicao = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[posicao];
    caixaPergunta.textContent = perguntaAtual.enunciado;
    
}
function mostraAlternativas (){
    for (const alternativa of perguntaAtual.alternativa){
        const botaoAlternativas = document.createElement ("button")
        botaoAlternativas.textContent = alternativa;
        caixaAlternativa.appendChild (botaoAlternativas);
    }
}
mostraPergunta ()