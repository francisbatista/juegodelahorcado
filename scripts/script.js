const contenedorLetras = document.getElementById("contenedorLetras");
const pantallaTablero = document.getElementById("pantallaTablero");
const pantallaPrincipal = document.getElementById("pantallaPrincipal");
const btnIniciarJuego = document.getElementById("btnIniciarJuego");
const btnNuevoJuego = document.getElementById("btnNuevoJuego");
const btnDesistir = document.getElementById("btnDesistir");

function dibujarLineaCentral(){
    const tablero = document.getElementById("myCanvas");
    const pincel = tablero.getContext("2d");

    pincel.beginPath()
    pincel.lineWidth = 5;
    pincel.lineCap = "round";
    pincel.strokeStyle = "darkblue";

    pincel.moveTo(220, 280);
    pincel.lineTo(380, 280);
    pincel.stroke();
}
dibujarLineaCentral();

const arrayPalabras = ["A","AA","AAAA","AAAAA","AAAAAA","AAAAAAA"];

function nuevoJuego(){
    contenedorLetras.innerHTML = "";
    let indice = Math.round(Math.random() * (arrayPalabras.length - 1));
    let palabra = arrayPalabras[indice];
    let elementoDiv;
    for(let i = 0; i < palabra.length; i++){
        elementoDiv = document.createElement("div");
        elementoDiv.setAttribute("class", "unDiv");
        contenedorLetras.appendChild(elementoDiv);
    }
    if(pantallaTablero.hasAttribute("hidden")){
        pantallaPrincipal.setAttribute("hidden", "true");
        pantallaTablero.removeAttribute("hidden");
    }
}

btnIniciarJuego.addEventListener("click", nuevoJuego);
btnNuevoJuego.addEventListener("click", nuevoJuego);
btnDesistir.addEventListener("click", () => {
    if(pantallaPrincipal.hasAttribute("hidden")){
        pantallaTablero.setAttribute("hidden","true");
        pantallaPrincipal.removeAttribute("hidden");
    }
});
