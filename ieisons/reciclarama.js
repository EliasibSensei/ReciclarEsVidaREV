const imagenes = [
  "../Imgs/Lata1.jpg", "../Imgs/Foco1.jpg", "../Imgs/Caja1.jpg", "../Imgs/Manzana1.jpg", "../Imgs/Botella1.jpg", "../Imgs/Pescado1.jpg", "../Imgs/Plasticos1.jpg", "../Imgs/TV1.jpg"
];

let cartas = [...imagenes, ...imagenes];
let primeraCarta = null;
let segundaCarta = null;
let bloqueado = false;
let parejasEncontradas = 0;

const tablero = document.getElementById('tablero');
const botonReiniciar = document.getElementById('reiniciar');
const mensaje = document.getElementById('mensaje');

// Lista de mensajes de felicitación
const mensajesFelicitacion = [
  "Todo es una bendicion ve",
  "Andas con todo vea",
  "Y aqui andas papa ff",
  "Una emotiza inzana",
  "La cagada va en la taza bro"
];

// Iniciar el juego
function iniciarJuego() {
  parejasEncontradas = 0;
  cartas = cartas.sort(() => Math.random() - 0.5);
  tablero.innerHTML = '';
  mensaje.classList.add('oculto'); // Ocultamos el mensaje al reiniciar

  cartas.forEach((imagen) => {
    const carta = document.createElement('div');
    carta.classList.add('carta');

    const cartaInner = document.createElement('div');
    cartaInner.classList.add('carta-inner');

    const cartaFrente = document.createElement('div');
    cartaFrente.classList.add('carta-frente');
    const img = document.createElement('img');
    img.src = `${imagen}`;
    cartaFrente.appendChild(img);

    const cartaDorso = document.createElement('div');
    cartaDorso.classList.add('carta-dorso');

    cartaInner.appendChild(cartaFrente);
    cartaInner.appendChild(cartaDorso);
    carta.appendChild(cartaInner);

    carta.addEventListener('click', girarCarta);
    tablero.appendChild(carta);
  });
}

// Girar una carta
function girarCarta() {
  if (bloqueado || this.classList.contains('volteada')) return;

  this.classList.add('volteada');

  if (!primeraCarta) {
    primeraCarta = this;
  } else {
    segundaCarta = this;
    verificarPareja();
  }
}

// Verificar si las cartas son iguales
function verificarPareja() {
  bloqueado = true;

  const esPareja =
    primeraCarta.querySelector('img').src ===
    segundaCarta.querySelector('img').src;

  if (esPareja) {
    parejasEncontradas++;
    resetearCartas(true);
    verificarJuegoCompletado();
  } else {
    setTimeout(() => resetearCartas(false), 1000);
  }
}

// Verificar si todas las parejas han sido encontradas
function verificarJuegoCompletado() {
  if (parejasEncontradas === imagenes.length) {
    mostrarFelicitacion();
  }
}

// Mostrar un mensaje de felicitación aleatorio en la página
function mostrarFelicitacion() {
  const mensajeAleatorio = mensajesFelicitacion[Math.floor(Math.random() * mensajesFelicitacion.length)];
  mensaje.textContent = mensajeAleatorio;
  mensaje.classList.remove('oculto');
  // document.getElementById("mensaje").innerText = mensajesFelicitacion;
  // mensaje.textContent = (mensaje)
  // mensaje.classList.remove('oculto'); 
  // Mostramos el mensaje "Eres la ostia GG Papa"
}

// Resetear las cartas después de verificar
function resetearCartas(sonPareja) {
  if (!sonPareja) {
    primeraCarta.classList.remove('volteada');
    segundaCarta.classList.remove('volteada');
  }
  primeraCarta = null;
  segundaCarta = null;
  bloqueado = false;
}

// Reiniciar el juego
botonReiniciar.addEventListener('click', iniciarJuego);

// Llamada inicial al juego
iniciarJuego();