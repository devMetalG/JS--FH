import { valorCarta } from "./"
const spans = document.querySelectorAll('span')
/**
 * Acumula los puntos de los jugadores
 * @param {Number} turno Ejemplo: 0
 * @param {String} carta Ejemplo: 2D
 * @param {Array<Number>} puntosJugadores Ejemplo: [0,0]
 * @returns {Number} Retorna los puntos acumulados
 */
export const acumularPuntos =  (turno, carta, puntosJugadores) => {
  puntosJugadores[turno] += valorCarta(carta)
  spans[turno].textContent = puntosJugadores[turno]
  return puntosJugadores[turno]
}