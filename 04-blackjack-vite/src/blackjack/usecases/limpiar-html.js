/**
 * Limpia el contenido del DIV
 * @param {HTMLDivElement} section DIV a limpiar
 */
export function limpiarHTML (section) {
  while(section.firstChild){
    section.removeChild(section.firstChild)
  }
}