function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  // if(html.classList.contains("light")){
  //   html.classList.remove("light")
  // } else {
  //   html.classList.add("light")
  // }

  //Pegar a tag IMG
  const img = document.querySelector("#profile img")
  //Substituir a imagem
  if (html.classList.contains("light")) {
    //Se tiver ligth mode ativar a imagem light
    img.setAttribute("src", "./assets/israel2.jpeg")
  } else {
    //Se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/israel.jpeg")
  }

  if (html.classList.contains("light")) {
    img.setAttribute("alt", "Ligth")
  } else {
    img.setAttribute("alt", "Dark")
  }
}
