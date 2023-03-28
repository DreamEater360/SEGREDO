const sim = document.getElementById("disse_sim")
const nao = document.getElementById("disse_nao")
const div = document.getElementById("caixa")

sim.addEventListener("click", simPorra) 
nao.addEventListener("click", () => {
  const left = Math.floor(Math.random() * 40);
  const top = Math.floor(Math.random() * 50);

  nao.style.left = left + "px";
  nao.style.top = top + "px";

  nao.style.position = "relative"
});

function simPorra() {
    const mano = document.getElementById("frase")
    return mano.innerHTML = "bora"
}



