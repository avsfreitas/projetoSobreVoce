let contador= 0;
let pergunta;
let respostas = document.getElementById("respostas");
let resposta;
let nome;
let idade;
let resultado;

function ativarBotao() {
    let ativar = document.getElementById("botaoEnviar");
    ativar.removeAttribute("disabled");
}

function desativarBotao() {
    document.getElementById("botaoEnviar").disabled = true;
}

function clicouBotao() {
    contador++;
    pergunta = document.getElementById("pergunta");
    return {contador, pergunta};
}

function limparInput() {
    respostas.value = " ";
}

function perguntas() {
    if (contador == 1) {
        nome = document.getElementById("respostas").value;
         pergunta.innerHTML = "Quantos anos você tem?";
    } else if (contador == 2) {
        idade = document.getElementById("respostas").value;
        pergunta.innerHTML = "Qual linguagem de programação você está estudando?";
    } else if (contador == 3) {
        let linguagem = document.getElementById("respostas").value;
        let resultadoNome = document.getElementById("resultadoNome");
        resultadoNome.innerHTML = `Olá ${nome}, você tem ${idade} e já está aprendendo ${linguagem}`;
        pergunta.innerHTML = `Você gosta de estudar ${linguagem}? <br> Responda com 1 para " sim " e 2 para " não "`;
        
    } else {
        linguagem = document.getElementById("respostas").value;
        resultado = document.getElementById("resultadoLinguagem");
        if (linguagem == 1 ) {
            resultado.innerHTML = "Muito bom! Continue estudando e você terá muito sucesso.";
        } else {
            resultado.innerHTML = "Ahh que pena... Já tentou aprender outras linguagens?";
        }
    desativarBotao();    
    }
    
}