console.log("Conexión con JS correcta!");

/* 1. PREVISUALIZACIÓN DE GIFS (Delegación de Eventos) */
document.addEventListener("mouseover", (e) => {
    if (e.target.dataset.gif) e.target.src = e.target.dataset.gif;
});
document.addEventListener("mouseout", (e) => {
    if (e.target.dataset.original) e.target.src = e.target.dataset.original;
});

/* 2. SISTEMA DE LIKE Y DISLIKE */
let likes = 4, dislikes = 0;
let estadoLike = false, estadoDislike = false;

const btnLike = document.querySelector("#boton-like");
const btnDislike = document.querySelector("#boton-dislike");
const numLike = document.querySelector("#valor-like");
const numDislike = document.querySelector("#valor-dislike");

btnLike.addEventListener("click", () => {
    if (!estadoLike) {
        likes++;
        estadoLike = true;
        btnLike.querySelector("img").src = "static/images/botonLike_activo.png";
        if (estadoDislike) {
            dislikes--;
            estadoDislike = false;
            btnDislike.querySelector("img").src = "static/images/botonDislike_neutral.png";
        }
    } else {
        likes--;
        estadoLike = false;
        btnLike.querySelector("img").src = "static/images/botonLike_neutral.png";
    }
    numLike.textContent = likes;
    numDislike.textContent = dislikes;
});

btnDislike.addEventListener("click", () => {
    if (!estadoDislike) {
        dislikes++;
        estadoDislike = true;
        btnDislike.querySelector("img").src = "static/images/botonDislike_activo.png";
        if (estadoLike) {
            likes--;
            estadoLike = false;
            btnLike.querySelector("img").src = "static/images/botonLike_neutral.png";
        }
    } else {
        dislikes--;
        estadoDislike = false;
        btnDislike.querySelector("img").src = "static/images/botonDislike_neutral.png";
    }
    numLike.textContent = likes;
    numDislike.textContent = dislikes;
});

/* 3. BOTÓN DE SUSCRIPCIÓN */
const btnSub = document.querySelector("#boton-subscripcion");
const txtSub = document.querySelector("#texto-suscriptores");
let suscrito = false;

btnSub.addEventListener("click", () => {
    suscrito = !suscrito;
    btnSub.textContent = suscrito ? "Suscrito 🔔" : "Suscribirse";
    btnSub.classList.toggle("suscrito", suscrito);
    txtSub.textContent = suscrito ? "2.5M subscriptores (+1)" : "2.5M subscriptores";
});

/* 4. GESTIÓN DE LA COLA */
const contenedorCola = document.querySelector("#contenedor-cola");

// Añadir recomendados a la cola
document.querySelectorAll(".boton-agregar").forEach((btn) => {
    btn.addEventListener("click", () => {
        const caja = btn.closest(".caja-video");
        const img = caja.querySelector("img");
        const titulo = caja.querySelector("h4").textContent;
        const canal = caja.querySelectorAll("p")[0].textContent;
        const vistas = caja.querySelectorAll("p")[1].textContent;

        const nuevaCaja = document.createElement("div");
        nuevaCaja.className = "caja-video";
        nuevaCaja.innerHTML = `
            <div class="contenedor-miniVideo">
                <img src="${img.src}" data-gif="${img.dataset.gif}" data-original="${img.dataset.original}" alt="${titulo}">
            </div>
            <div class="mini-descripcion">
                <h4>${titulo}</h4>
                <p>${canal}</p>
                <p>${vistas}</p>
            </div>
            <div class="agregar-eliminar">
                <button class="boton-quitar">
                    <img class="imagen-icono" src="static/images/botonQuitar.png" alt="Quitar">
                </button>
            </div>`;
        contenedorCola.appendChild(nuevaCaja);
    });
});

// Eliminar un video individual de la cola
contenedorCola.addEventListener("click", (e) => {
    const btnQuitar = e.target.closest(".boton-quitar");
    if (btnQuitar) btnQuitar.closest(".caja-video").remove();
});

// Limpiar cola completa
document.querySelector("#boton-limpiar-cola").addEventListener("click", () => {
    contenedorCola.innerHTML = "";
});