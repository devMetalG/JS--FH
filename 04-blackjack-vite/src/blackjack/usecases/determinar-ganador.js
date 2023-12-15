import { crearAlerta } from "./" 
/**
 * Determina quien gano
 * @param {Number} puntosMinimos Ejemplo: 20
 * @param {Number} puntosComputadora Ejemplo: 21
 */
export const determinarGanador = (puntosMinimos, puntosComputadora) => {
  if (puntosMinimos === puntosComputadora) {
    crearAlerta('Empate!')
  } else if (puntosComputadora > 21) {
    crearAlerta('Ganaste!')
  } else if (puntosComputadora > puntosMinimos && puntosComputadora <= 21) {
    crearAlerta('Gano la computadora')
  } 
}