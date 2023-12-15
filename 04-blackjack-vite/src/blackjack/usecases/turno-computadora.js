import { 
  pedirCarta,
  acumularPuntos, 
  crearCarta, 
  determinarGanador 
} from "./"
const divCartasJugador = document.querySelectorAll('.div-cartas')
// Turno de la computadora
/**
 * 
 * @param {Number} puntosMinimos Ejemplo: 20 
 * @param {*} puntos 
 * @param {*} deck 
 */
export const turnoComputadora = (puntosMinimos, puntosJugadores, deck) => {
  let puntosComputadora = 0
  do {
    const carta = pedirCarta(deck)
    puntosComputadora = acumularPuntos(puntosJugadores.length - 1,carta, puntosJugadores)
    const imgCarta = crearCarta(carta)
    divCartasJugador[puntosJugadores.length - 1].appendChild(imgCarta)


  } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21))

  determinarGanador(puntosMinimos, puntosComputadora)  
}