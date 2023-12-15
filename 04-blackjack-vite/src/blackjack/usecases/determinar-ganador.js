import { crearAlerta } from "./" 
export const determinarGanador = (puntosMinimos, puntosComputadora) => {
  if (puntosMinimos === puntosComputadora) {
    crearAlerta('Empate!')
  } else if (puntosComputadora > 21) {
    crearAlerta('Ganaste!')
  } else if (puntosComputadora > puntosMinimos && puntosComputadora <= 21) {
    crearAlerta('Gano la computadora')
  } 
}