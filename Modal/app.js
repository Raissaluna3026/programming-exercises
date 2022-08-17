//selecionar o modal-btn, modal-overlay e o close-btn
//pegar o evento de clique do modal-btn e close-btn
//quando o usuario clica em modal-btn add .OPEN-MODAL para modal-overlay
//quando o usuario clica em close-btn remove .OPEN-MODAL de modal-overlay

const modalBtn = document.querySelector('.modal-btn')
const modal = document.querySelector('.modal-overlay')
const closeBtn = document.querySelector('.close-btn')

modalBtn.addEventListener('click', function () {
  modal.classList.add('open-modal')
})
closeBtn.addEventListener('click', function () {
  modal.classList.remove('open-modal')
})
