const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-pergunta');
const caixaResultado = document.querySelector('.caixa-resultado');
const caixaAlternativa = document.querySelector('.caixa-alternativa');

const perguntas = [//Abre a lista de Objetos (itens)
    {//Abre o item
        enunciado:"Pergunta 1" ,
        alternativas: ["Alternativa 1","Alternativa 2"]
    },
{//Abre o item
    enunciado:"Pergunta 2" ,
    alternativas: ["Alternativa 1","Alternativa 2"]
},
{//Abre o item
    enunciado:"Pergunta 3" ,
    alternativas: ["Alternativa 1","Alternativa 2"]
},
]
let posicao= 0;
let perguntaAtual; 

function mostraPergunta (){
    
}