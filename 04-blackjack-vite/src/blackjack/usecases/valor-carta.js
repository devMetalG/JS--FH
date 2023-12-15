/**
 * Muestra el valor de una carta
 * @param {String} carta Ejemplo: '5D'
 * @returns {Number} retorna el valor de la carta
 */
export const valorCarta = carta => {
  const valor = carta.substring(0, carta.length - 1)

  return isNaN(valor) 
    ? valor === 'A' ?  11 :  10 
    : Number(valor) 
}