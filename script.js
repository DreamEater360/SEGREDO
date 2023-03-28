const sim = document.getElementById("disse_sim")
const nao = document.getElementById("disse_nao")

sim.addEventListener("click", simPorra()) 
nao.addEventListener("click", naoPorra())

function simPorra() {
    const mano = document.getElementById("frase")
    return mano.innerHTML = "Aeee Carai"
}

function naoPorra() {
    return meuBotao.addEventListener("click", posicaoAleatoria);
}


function posicaoAleatoria() {
  // Define um valor aleatório para a posição "left"
  const left = Math.floor(Math.random() * (window.innerWidth - meuBotao.clientWidth));
  // Define um valor aleatório para a posição "top"
  const top = Math.floor(Math.random() * (window.innerHeight - meuBotao.clientHeight));
  // Define a posição do botão com os valores aleatórios
  meuBotao.style.left = left + "px";
  meuBotao.style.top = top + "px";
}



