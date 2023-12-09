class Persona {
  nombre = ''
  codigo = ''
  frase = ''

  constructor(nombre = 'Sin nombre', codigo= 'Sin codigo', frase = 'Sin frase'){
    this.nombre = nombre
    this.codigo = codigo
    this.frase = frase
  }
}

const spiderman = new Persona('Peter Parker', 'Spider', 'Soy tu amigable vecino Spiderman')
const ironman = new Persona('Tony Stark', 'IronMan', 'Yo soy Ironman')
console.log(spiderman)
console.log(ironman)