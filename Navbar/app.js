const navToggle = document.querySelector('.nav-toggle')
const links = document.querySelector('.links')

//Se os links estão ocultos, abaixo existem duas maneiras distintas de mostrar os links ocultos, "escondidos" no icon de barra.

navToggle.addEventListener('click', function () {
  //console.log(links.classList.contains('links'))
  /*if (links.classList.contains('show-links')) {
    links.classList.remove('show-links')
  } else {
    links.classList.add('show-links')
  }*/

  //aqui em baixo outra maneira mais prática de mostrar os links ocultos
  links.classList.toggle('show-links')
})
