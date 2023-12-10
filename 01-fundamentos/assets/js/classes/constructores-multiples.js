class Persona {

  static porObjeto({nombre, apellido, pais}){
    return new Persona(nombre, apellido, pais)
  }

  constructor(nombre, apellido, pais){
    this.nombre = nombre
    this.apellido = apellido
    this.pais = pais
  }

  getInfo(){
    console.log(`Info: ${this.nombre}, ${this.apellido}, ${this.pais}`)
  }
}

const nombre1 = 'Memo',
      apellido1 = 'Franco'
      pais1 = 'Mexico'

const memo = {
  nombre: 'Guillermo',
  apellido: 'Franco',
  pais: 'Mexico'
}

const persona1 = new Persona(nombre1, apellido1, pais1)
const persona2 = Persona.porObjeto(memo)

persona1.getInfo()
persona2.getInfo()