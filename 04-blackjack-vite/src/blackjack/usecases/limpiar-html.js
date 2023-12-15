export function limpiarHTML (section) {
  while(section.firstChild){
    section.removeChild(section.firstChild)
  }
}