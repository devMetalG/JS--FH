/**
 * Crea la carta
 * @param {String} carta Ejemplo: 5H 
 * @returns {HTMLImageElement} Ejemplo: assets/cartas/4H.png
 */
export const crearCarta = carta => {
  const imgCarta = document.createElement('IMG')
  imgCarta.classList.add('carta')
  imgCarta.src = `assets/cartas/${carta}.png`

  return imgCarta
}