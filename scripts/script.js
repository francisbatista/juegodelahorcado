const contenedorLetras = document.getElementById("contenedorLetras");
const pantallaTablero = document.getElementById("pantallaTablero");
const pantallaPrincipal = document.getElementById("pantallaPrincipal");
const btnIniciarJuego = document.getElementById("btnIniciarJuego");
const btnNuevoJuego = document.getElementById("btnNuevoJuego");
const btnDesistir = document.getElementById("btnDesistir");
const entrada = document.getElementById("entrada");
const btnAgregarPalabra = document.getElementById("btnAgregarPalabra");
const pantallaAgregarPalabra = document.getElementById("pantallaAgregarPalabra");
const btnGuardar = document.getElementById("btnGuardar");
const btnCancelar = document.getElementById("btnCancelar");
const btnEmpezar = document.getElementById("btnEmpezar");

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

const arrayPalabras = [];

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

function guardarPalabra(){
    if(entrada.value == ""){
        alert("¡Debes escribir una palabra!");
        entrada.focus();
        return;
    }
    if(/[^A-Z]/g.test(entrada.value)){
        alert("¡El texto NO puede contener lo siguiente: (números, letras con acentos, LETRAS MINÚSCULAS, espacios, guiones)");
        entrada.value = "";
        entrada.focus();
        return;
    }
    if(!arrayPalabras.includes(entrada.value)){
        arrayPalabras.push(entrada.value);
    }
    entrada.value = "";
    entrada.focus();
}

btnIniciarJuego.addEventListener("click", nuevoJuego);
btnNuevoJuego.addEventListener("click", nuevoJuego);
btnDesistir.addEventListener("click", () => {
    if(pantallaPrincipal.hasAttribute("hidden")){
        pantallaTablero.setAttribute("hidden","true");
        pantallaPrincipal.removeAttribute("hidden");
    }
});
btnAgregarPalabra.addEventListener("click", () => {
    pantallaPrincipal.setAttribute("hidden","true");
    pantallaAgregarPalabra.removeAttribute("hidden");
    entrada.value = "";
    entrada.focus();
});
btnGuardar.addEventListener("click", guardarPalabra);
btnCancelar.addEventListener("click", () => {
    pantallaAgregarPalabra.setAttribute("hidden", "true");
    pantallaPrincipal.removeAttribute("hidden");
});
btnEmpezar.addEventListener("click", () => {
    pantallaAgregarPalabra.setAttribute("hidden", "true");
    pantallaTablero.removeAttribute("hidden");
    nuevoJuego();
});
