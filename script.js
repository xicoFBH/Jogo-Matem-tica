const numeroQuestao1 = document.getElementById("numeroQuestao1");
const numeroQuestao2 = document.getElementById("numeroQuestao2");
const quadradoResposta = document.getElementById("quadradoResposta");
const quantidadePontucao = document.getElementById("quantidadePontuacao");
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const dificil = [3, 4, 5, 6, 7, 8, 9];
var pontuacao = 0;

numeroQuestao1.innerHTML = numeros[Math.floor(Math.random()*numeros.length)];
numeroQuestao2.innerHTML = dificil[Math.floor(Math.random()*dificil.length)];
resultado = numeroQuestao1.innerHTML * numeroQuestao2.innerHTML;
quantidadePontucao.innerHTML = pontuacao;

function mostrarResposta()
{
  if (quadradoResposta.innerHTML == resultado)
  {
    quadradoResposta.style.background = "green";
    quadradoResposta.style.color = "white";
    pontuacao++;
    quantidadePontucao.innerHTML = pontuacao;
  }
  
  if (quadradoResposta.innerHTML != resultado)
  {
    quadradoResposta.style.background = "red";
    quadradoResposta.style.color = "white";
    pontuacao = 0;
    quantidadePontucao.innerHTML = pontuacao;
  }

  document.getElementById("botaoVerificar").style.visibility = "hidden";
}

function novaConta() 
{
  quadradoResposta.style.background = "silver";
  quadradoResposta.style.color = "black";
  quadradoResposta.innerHTML = "";

  numeroQuestao1.innerHTML = numeros[Math.floor(Math.random()*numeros.length)];
  numeroQuestao2.innerHTML = dificil[Math.floor(Math.random()*dificil.length)];
  resultado = numeroQuestao1.innerHTML * numeroQuestao2.innerHTML;

  document.getElementById("botaoVerificar").style.visibility = "visible";
}

function adicionarNumero(numero)
{
  if (quadradoResposta.innerHTML.length <= 2)
  {
    quadradoResposta.innerHTML += numero;
  }
}

function resetValor()
{
  if (quadradoResposta.style.background == "silver")
  {
    quadradoResposta.innerHTML = "";
  }
}