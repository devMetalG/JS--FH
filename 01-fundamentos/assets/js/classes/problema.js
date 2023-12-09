const gfra = {
  nombre: 'Guillermo',
  edad: 24,
  imprimir(){
    console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`)
  }
}

const otro = {
  nombre: 'otro nombre',
  edad: 24
}

// gfra.imprimir()

function Persona (nombre, edad){
  console.log('Se ejecuto')
  this.nombre = nombre
  this.edad = edad
  this.imprimir = () => {
    console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`)
  }
}

const maria = new Persona('Maria', 18)
const memo = new Persona('Memo', 24)

maria.imprimir()
memo.imprimir()
