const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-pergunta');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [     //serve para abrir lista de perguntas
    {   //abre o objeto das perguntas
        enunciado: "Você frequenta academia?",
        alternativas: [
            {texto: "Sim",
            afirmação:"Parabéns pelo esforço"}, 

            {texto: "Não",
            afirmação:"Você deveria se esforçar mais"}]
    },
    { 
        enunciado: "Você costuma fazer exercício aerobicos?",
        alternativas: [
            {texto: "Sim",
            afirmação:"Você está no caminho certo"}, 
                
            {texto: "Não",
            afirmação:"Você deveria começar a fazer"}]
    },
    { 
        enunciado: "Você está satisfeito com seu corpo?",
        alternativas: [
            {texto: "Sim",
            afirmação:"Fico feliz por você"}, 
                
            {texto: "Não",
            afirmação:"Não fique triste, levante a cabeça e corra atrás de alcançar o seu corpo ''ideal'' "}]
    },
]
let posicao = 0;
let perguntaAtual;
let respostas = "";


function mostraPergunta() {
    if (posicao>=perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[posicao];
    caixaPergunta.textContent = perguntaAtual.enunciado;
    caixaAlternativa.textContent = " ";
    mostraAlternativas();
}
function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click",  () => respostasSelecionadas(alternativa));
        caixaAlternativa.appendChild(botaoAlternativas);
    }
}
function respostasSelecionadas(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmação;
    respostas += afirmacoes + " ";
    posicao++;
    mostraPergunta();
}
function mostraResultado(){
    caixaPergunta.textContent = "Confira suas respostas: ";
    textoResultado.textContent = respostas; 
    caixaAlternativa.textContent = "";
}
mostraPergunta();
