/**
 * Pide una carta
 * @param {Array<String>} deck String[]
 * @returns {String} retorna una carta del deck (String)
 */
export const pedirCarta = deck => {
  if (!deck || deck.length === 0) {
    crearAlerta('No hay cartas en el deck')
    return
  }
  return deck.pop()
}