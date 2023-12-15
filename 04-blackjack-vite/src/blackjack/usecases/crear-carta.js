
/**
 * Crea la carta
 * @param {String} carta Ejemplo: 5H 
 */
export const crearCarta = carta => {
  const imgCarta = document.createElement('IMG')
  imgCarta.classList.add('carta')
  imgCarta.src = `assets/cartas/${carta}.png`

  return imgCarta
}