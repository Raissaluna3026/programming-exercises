//A > 11, B > 12 e etc

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

//#f15025
//selecionando o botao, selecionando a class color e armazenando numa variavel
const btn = document.getElementById('btn')
const color = document.querySelector('.color')

//evento de click no botão para mudar a cor
btn.addEventListener('click', function () {
  let hexColor = '#'
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()]
  }
  color.textContent = hexColor
  document.body.style.backgroundColor = hexColor
})

//função para obter um numero aleatorio
function getRandomNumber() {
  return Math.floor(Math.random() * hex.length)
}
