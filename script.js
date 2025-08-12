const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "É a fase de grupos do Super Mundial de Clubes. Seu time está enfrentando um adversário tradicionalmente mais forte. Nos últimos minutos, você tem a chance de um contra-ataque mortal. O que você faz?",
        alternativas: [
            {
                texto: "Arriscar um passe longo para o atacante, buscando a vitória.",
                afirmacao: "Sua audácia valeu a pena! O passe encontrou o atacante, que marcou o gol da vitória nos acréscimos, garantindo a classificação antecipada. "
            },
            {
                texto: "Prender a bola e garantir o empate, evitando riscos.",
                afirmacao: "O empate foi conquistado. Embora seguro, a torcida sentiu a falta de ambição em um momento crucial. A classificação virá na próxima rodada. "
            }
        ]
    },
    {
        enunciado: "Nas quartas de final, um dos seus jogadores-chave recebe uma proposta milionária de um gigante europeu, a ser efetivada após o torneio. Como você lida com a situação para manter o foco do elenco?",
        alternativas: [
            {
                texto: "Conversar abertamente com o jogador e o elenco, reforçando o objetivo do Mundial e a importância de cada um.",
                afirmacao: "A transparência fortaleceu o grupo. O jogador, motivado pelo apoio, continuou a brilhar em campo, e a equipe seguiu unida rumo às semifinais. "
            },
            {
                texto: "Isolar o jogador do restante do elenco para evitar distrações, focando apenas nos jogos.",
                afirmacao: "Apesar da intenção de proteger o elenco, o isolamento criou um clima de incerteza. O jogador rendeu abaixo do esperado, e o time avançou com dificuldades. "
            }
        ]
    },
    {
        enunciado: "Na semifinal, seu time está perdendo por 1 a 0 no segundo tempo, e o adversário está fechado na defesa. Você precisa de uma mudança tática. Qual é sua abordagem?",
        alternativas: [
            {
                texto: "Colocar um atacante extra, apostando tudo no poder ofensivo.",
                afirmacao: "A ousadia compensou! O ataque ficou mais forte, e seu time conseguiu virar o jogo nos minutos finais, garantindo um lugar na grande final. "
            },
            {
                texto: "Fortalecer o meio-campo para controlar a posse de bola e buscar espaços com paciência.",
                afirmacao: "O controle do meio-campo trouxe mais segurança, mas os espaços foram difíceis de encontrar. O jogo foi para a prorrogação, onde a vitória veio com um gol de contra-ataque. "
            }
        ]
    },
    {
        enunciado: "É a grande final do Super Mundial de Clubes! O jogo está empatado e se encaminha para os pênaltis. Você precisa decidir quem serão os cinco batedores. Qual é seu critério principal?",
        alternativas: [
            {
                texto: "Escolher os jogadores com mais experiência e calma sob pressão, independentemente da posição.",
                afirmacao: "A experiência e a frieza dos seus batedores foram decisivas. Cada cobrança foi perfeita, e seu time se sagrou campeão mundial! "
            },
            {
                texto: "Priorizar os artilheiros do time, que possuem mais confiança no chute.",
                afirmacao: "Os artilheiros mostraram sua técnica, mas a pressão pesou. Alguns erraram, e a decisão foi para as mãos do goleiro. No final, seu time conquistou o título em uma disputa emocionante! "
            }
        ]
    },
    {
        enunciado: "Após a glória da conquista do Mundial, surgem propostas para você, o técnico, assumir grandes seleções e clubes europeus. Qual é o seu próximo passo?",
        alternativas: [
            {
                texto: "Aceitar uma das propostas, buscando novos desafios e reconhecimento internacional.",
                afirmacao: "Você embarcou em uma nova jornada, levando sua filosofia vitoriosa para o cenário global, marcando seu nome na história do futebol. "
            },
            {
                texto: "Permanece no clube, buscando construir um legado e defender o título mundial.",
                afirmacao: "Você escolheu a lealdade e o desafio de manter seu time no topo, consolidando uma dinastia e se tornando uma lenda para a torcida. "
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "A história do Super Mundial de Clubes do seu time em 2049:";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
