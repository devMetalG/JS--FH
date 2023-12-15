import { valorCarta } from "./"
const spans = document.querySelectorAll('span')
/**
 * 
 * @param {Number} turno 
 * @param {String} carta 
 * @returns 
 */
export const acumularPuntos =  (turno, carta, puntosJugadores) => {
  puntosJugadores[turno] += valorCarta(carta)
  spans[turno].textContent = puntosJugadores[turno]
  return puntosJugadores[turno]
}