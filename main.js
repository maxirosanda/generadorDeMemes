const cantidadMemes = 12
const galeriaDeMemes = document.getElementById("galeriaDeMemes")

for(let i = 1;i<=cantidadMemes;i++){
    const archivo = "./img/meme" + i +".jpeg"
    const img = document.createElement("img")
    img.src= archivo
    img.id = "meme" + i
    galeriaDeMemes.append(img)
}
galeriaDeMemes.addEventListener("click",(e)=>{
    if (e.target.tagName === 'IMG') {
        const idDelHijo = e.target.id;
        const visualizarMeme = document.getElementById("visualizarMeme")
        visualizarMeme.src = "./img/" + idDelHijo + ".jpeg"
      }
})
const ingresoTitulo = document.getElementById("ingresoTitulo")
ingresoTitulo.addEventListener("change",(e)=>{
    const tituloMene = document.getElementById("tituloMene")
    tituloMene.innerText = e.target.value
})

const ingresoTexto = document.getElementById("ingresoTexto")
ingresoTexto.addEventListener("change",(e)=>{
    const textoMeme = document.getElementById("textoMeme")
    textoMeme.innerText = e.target.value
})

//almacenar memes en localStorage (utilizo arrays,objetos literales,localStorage)
const memes = JSON.parse(localStorage.getItem("memes")) || []
const btnGuardaMeme = document.getElementById("btnGuardaMeme")
btnGuardaMeme.addEventListener("click",()=>{
    const tituloMene = document.getElementById("tituloMene")
    const textoMeme = document.getElementById("textoMeme")
    const visualizarMeme = document.getElementById("visualizarMeme")
    const meme = {
        id: Math.round(Math.random() * 100000000000) ,
        titulo: tituloMene.innerText,
        texto: textoMeme.innerText,
        src:visualizarMeme.src
    }
    memes.push(meme)
    localStorage.setItem("memes",JSON.stringify(memes))
})


