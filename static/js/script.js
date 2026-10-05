console.log(`Conexión con JS correcta!`)
/* Variables para el cambio de imágenes */
let imagen1 = document.querySelector("#portadaCambiante1")
let imagen2 = document.querySelector("#portadaCambiante2")
let imagen3 = document.querySelector("#portadaCambiante3")
let imagen4 = document.querySelector("#portadaCambiante4")
let imagen5 = document.querySelector("#portadaCambiante5")
let imagen6 = document.querySelector("#portadaCambiante6")
let imagen7 = document.querySelector("#portadaCambiante7")
let imagen8 = document.querySelector("#portadaCambiante8")
let imagen9 = document.querySelector("#portadaCambiante9")
let imagen10 = document.querySelector("#portadaCambiante10")

imagen1.addEventListener("mouseover", function(){
    this.src = "static/images/MvMpreview.gif";
})

imagen1.addEventListener("mouseout", function(){
    this.src = "static/images/MannVsMachine.png";
})

imagen2.addEventListener("mouseover", function(){
    this.src = "static/images/ExpirationDatePreview.gif";
})

imagen2.addEventListener("mouseout", function(){
    this.src = "static/images/ExpirationDate.png";
})

imagen3.addEventListener("mouseover", function(){
    this.src = "static/images/idkJungleInfernoPreview.gif";
})

imagen3.addEventListener("mouseout", function(){
    this.src = "static/images/JungleInferno.png";
})

imagen4.addEventListener("mouseover", function(){
    this.src = "static/images/MeetTheDemomanPreview.gif";
})

imagen4.addEventListener("mouseout", function(){
    this.src = "static/images/MeetTheDemoman.png";
})

imagen5.addEventListener("mouseover", function(){
    this.src = "static/images/PootisEngagePreview.gif";
})

imagen5.addEventListener("mouseout", function(){
    this.src = "static/images/PootisEngage.png";
})

imagen6.addEventListener("mouseover", function(){
    this.src = "static/images/RightBehindYouPreview.gif";
})

imagen6.addEventListener("mouseout", function(){
    this.src = "static/images/RightBehindYou.png";
})

imagen7.addEventListener("mouseover", function(){
    this.src = "static/images/LetAndLiveSpyPreview.gif";
})

imagen7.addEventListener("mouseout", function(){
    this.src = "static/images/LetAndLiveSpy.png";
})

imagen8.addEventListener("mouseover", function(){
    this.src = "static/images/TeamFabulous2Preview.gif";
})

imagen8.addEventListener("mouseout", function(){
    this.src = "static/images/TeamFabulous2.png";
})

imagen9.addEventListener("mouseover", function(){
    this.src = "static/images/AnAustralianBloodyMiraclePreview.gif";
})

imagen9.addEventListener("mouseout", function(){
    this.src = "static/images/TheAustralianChristmasBloodyMiracle.png";
})

imagen10.addEventListener("mouseover", function(){
    this.src = "static/images/TheRedTheBlueAndTheUgly.gif";
})

imagen10.addEventListener("mouseout", function(){
    this.src = "static/images/TheRedTheBlueAndTheUgly.png";
})

/* Variables para los botones de like/dislike */

let contadorLike = 4;
let contadorDislike = 0;
let botonLike = document.querySelector("#boton-like")
let valorDelLike = document.querySelector("#valor-like")
let botonDislike = document.querySelector("#boton-dislike")
let botonCompartir = document.querySelector("#boton-compartir")
let botonAgregarCola = document.querySelector("#boton-agregarCola")

botonLike.addEventListener("click", function(){
    if(botonLike !== contadorLike){
        contadorLike++;
        valorDelLike.textContent = `${contadorLike}`;
        this.img.src = "static/images/botonLike_activo.png"
    } else {
        console.log("El botón no existe o no está definido")
    }
})

botonLike.addEventListener("click", function(){
    if (botonLike > 5){
        contadorLike--;
        valorDelLike.textContent = `${contadorLike}`;
        this.img.src = "static/images/botonLike_neutral.png"
    } else {
        console.log("El botón no existe o no está definido")
    }
})