const IMG1 = "../Imagens/SJP1.jpg"
const IMG2 = "../Imagens/SJP2.jpg"
const IMG3 = "../Imagens/SJP3.jpg"
const IMG4 = "../Imagens/SJP4.jpg"
const IMG5 = "../Imagens/SJP5.jpg"
const IMG6 = "../Imagens/SJP6.jpg"
const IMG7 = "../Imagens/CanecaAbel.png"
const IMG8 = "../Imagens/CanecaAbel2.png"

const modal = document.getElementById("dialog")
const imagem = document.getElementById("imgPopup")

function popup(img){
    imagem.src = img
    modal.showModal()
}