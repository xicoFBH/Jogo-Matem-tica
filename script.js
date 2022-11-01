/*
VARIAVEIS DOM
*/
const numeroQuestao1 = document.getElementById("numeroQuestao1");
const numeroQuestao2 = document.getElementById("numeroQuestao2");
const quadradoResposta = document.getElementById("quadradoResposta");
const quantidadePontucao = document.getElementById("quantidadePontuacao");
const quantidadeRecord = document.getElementById("quantidadeRecord");
const quantidadeTempoRestante = document.getElementById("quantidadeTempoRestante");
const botaoVerificar = document.getElementById("botaoVerificar");
const botaoNovaConta = document.getElementById("botaoNovaConta");
const modal = document.getElementById("modal");

/*
VARIAVEIS NUMEROS MATEMATICA
*/
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const dificil = [3, 4, 5, 6, 7, 8, 9];

/*
VARIAVEIS PARA SISTEMA DE PONTOS E TEMPO
*/
var pontuacao = 0;
var tempo = 10;
var limiteTempo = setInterval(temporizador, 1000);

/*
APRESENTAR VALORES INICIAIS
*/
numeroQuestao1.innerHTML = numeros[Math.floor(Math.random()*numeros.length)];
numeroQuestao2.innerHTML = dificil[Math.floor(Math.random()*dificil.length)];
resultado = numeroQuestao1.innerHTML * numeroQuestao2.innerHTML;
quantidadePontucao.innerHTML = pontuacao;
quantidadeTempoRestante.innerHTML = tempo;

/*
ESTILOS PARA VERIFICACAO DE ESTADO
*/
botaoVerificar.style.visibility = "visible";
quadradoResposta.style.background = "var(--principal)"

/*
SISTEMA DE RECORDE PERSISTENTE
*/
if (localStorage.getItem("record") == null)
{
  localStorage.setItem("record", 0);
  quantidadeRecord.innerHTML = localStorage.getItem("record");
}
else
{
  quantidadeRecord.innerHTML = localStorage.getItem("record");
}

/*
FUNCAO PARA VERIFICAR SE A RESPOSTA ESTA CORRETA
*/
function mostrarResposta()
{
  if (quadradoResposta.innerHTML == resultado)
  {
    quadradoResposta.style.background = "green";
    quadradoResposta.style.color = "white";
    pontuacao++;
    quantidadePontucao.innerHTML = pontuacao;
    if (pontuacao > localStorage.getItem("record"))
    {
      localStorage.setItem("record", pontuacao);
      quantidadeRecord.innerHTML = localStorage.getItem("record");
    }
  }
  
  if (quadradoResposta.innerHTML != resultado)
  {
    quadradoResposta.style.background = "red";
    quadradoResposta.style.color = "white";
    pontuacao = 0;
    quantidadePontucao.innerHTML = pontuacao;
  }

  botaoVerificar.style.visibility = "hidden";
  clearInterval(limiteTempo);

  seguinte = setTimeout(novaConta, 2000);
}

/*
FUNCAO PROXIMO NIVEL
*/
function novaConta() 
{
  quadradoResposta.style.background = "var(--principal)";
  quadradoResposta.style.color = "var(--texto)";
  quadradoResposta.innerHTML = "";

  numeroQuestao1.innerHTML = numeros[Math.floor(Math.random()*numeros.length)];
  numeroQuestao2.innerHTML = dificil[Math.floor(Math.random()*dificil.length)];
  resultado = numeroQuestao1.innerHTML * numeroQuestao2.innerHTML;

  botaoVerificar.style.visibility = "visible";

  clearInterval(limiteTempo);
  tempo = 10;
  quantidadeTempoRestante.innerHTML = tempo;
  limiteTempo = setInterval(temporizador, 1000);
}

/*
FUNCAO PARA ADICIONAR NUMERO CARREGADO A RESPOSTA
*/
function adicionarNumero(numero)
{
  if (quadradoResposta.innerHTML.length <= 2 && botaoVerificar.style.visibility == "visible")
  {
    quadradoResposta.innerHTML += numero;
  }
}

/*
APAGAR VALOR DA RESPOSTA
*/
function resetValor()
{
  if (quadradoResposta.style.background == "var(--principal)")
  {
    quadradoResposta.innerHTML = "";
  }
}

/*
FUNCAO SISTEMA TEMPO
*/
function temporizador()
{
  if (tempo > 1)
  {
    tempo--;
    quantidadeTempoRestante.innerHTML = tempo;
  }
  else
  {
    clearInterval(limiteTempo);
    quantidadeTempoRestante.innerHTML = 0;
    mostrarResposta();
  }
}

/*
FUNCAO PARA MOSTRAR MODAL
*/
function mostrarModal()
{
  modal.style.visibility = "visible";
  clearInterval(limiteTempo);
  if (quadradoResposta.style.background != "var(--principal)")
  {
    clearTimeout(seguinte);
  }
}

/*
FUNCAO PARA FECHAR MODAL
*/
function esconderModal()
{
  modal.style.visibility = "hidden";
  limiteTempo = setInterval(temporizador, 1000);
}