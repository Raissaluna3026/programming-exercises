//data aqui
const reviews = [
  {
    id: 1,
    name: 'Augusto cesar',
    job: 'software developer',
    img: './img/903193f6-65e7-4885-9c0e-6a411850f7c2.jfif',
    text: 'Augusto cesar, mais conhecido como Guto Python, atua no mercado da programação há 7 anos, ja atuou como engenheiro de software, e atualmente exerce a função de application development specialist. Tem conhecimento nas linguagens Python, R, Javascript, Java, SQL. Excelente profissional e professor. '
  },
  {
    id: 2,
    name: 'Matheus Barreto',
    job: 'software engineer',
    img: './img/71776671.png',
    text: ' Matheus Barreto é formado em engenharia de software, atualmente exerce a função de analista de sistemas, almeja sucesso profissonal trabalhando em uma grande empresa de tecnologia. Considerado no momento, um desenvolvedor full stack, excelente profissional em cresimento na área de programação e desenvolvimento de sistemas.'
  },
  {
    id: 3,
    name: 'Raissa Luna',
    job: 'software developer junior',
    img: './img/mt inteligne.jfif',
    text: ' Raissa Luna é uma estudante de engenharia de software, atualmente não atua na área de desenvolvimento de sistemas. Iniciante no ramo da programação, com conhecimento nas linguagens Javascript e SQL, almeja o sucesso profissional operando como arquiteta de software. '
  },
  {
    id: 4,
    name: 'Vitor Queiroz',
    job: 'web developer',
    img: './img/vitofeio.jfif',
    text: ' Vitor vitor vitor vitor Vitor vitor vitor vitorVitor vitor vitor vitorVitor vitor vitor vitorVitor vitor vitor vitorVitor vitor vitor vitorVitor vitor vitor vitor'
  }
]
const img = document.getElementById('person-img')
const author = document.getElementById('author')
const job = document.getElementById('job')
const info = document.getElementById('info')

const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')
const randomBtn = document.querySelector('.random-btn')

//selecionar item inicial
let currentItem = 1

// carregar item inicial
window.addEventListener('DOMContentLoaded', function () {
  showPerson()
})

//mostrar pessoa com base no item

function showPerson(person) {
  const item = reviews[currentItem]
  img.src = item.img
  author.textContent = item.name
  job.textContent = item.job
  info.textContent = item.text
}

//mostrar proxima pessoa
nextBtn.addEventListener('click', function () {
  currentItem++
  if (currentItem > reviews.length - 1) {
    currentItem = 0
  }
  showPerson()
})

//mostrar pessoa anterior
prevBtn.addEventListener('click', function () {
  currentItem--
  if (currentItem < 0) {
    currentItem = reviews.length - 1
  }
  showPerson()
})

// mosrar pessoas aleatorias
randomBtn.addEventListener('click', function () {
  currentItem = Math.floor(Math.random() * reviews.length)
  console.log(currentItem)
  showPerson()
})
