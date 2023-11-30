function crearPersona (nombre, apellido) {
  return {
    nombre,
    apellido
  }
}
const crearPersona2 = (nombre, apellido) => ({nombre, apellido})

const persona = crearPersona('Guillermo', 'Franco')
console.log(persona)
const persona2 = crearPersona2('Joel', 'Franco')
console.log(persona2)

function imprimeArgumentos() {
  console.log(arguments)
}

imprimeArgumentos(10, 'hola', true)

const imprimeArgumentos2 = (...arguments) => arguments

const argumentos = imprimeArgumentos2(10, 'hola', true)
console.log(argumentos)
const [edad, saludo, vivo] = argumentos
console.log(`Edad: ${edad}`)
console.log(`Saludo: ${saludo}`)
console.log(`Vivo: ${vivo}.`)

const {apellido:lastName} = crearPersona('Memo', 'Franco')
console.log(lastName)

const personaje = {
  nombre: 'Peter Parker',
  codeName: 'Spider-Man',
  vivo: true,
  edad: 20,
  trajes: ['Iron-Spider', 'Spider-Man 2099', 'Amazing Spider-Man'],
}
// Forma sin destructuring
// const imprimePropiedades = (personaje) => {
//   console.log(`Nombre: ${personaje.nombre}`)
//   console.log(`CodeName: ${personaje.codeName}`)
//   console.log(`Vivo: ${personaje.vivo}`)
//   console.log(`Edad: ${personaje.edad}`)
//   console.log(`Trajes: ${personaje.trajes}`)
// }

// Con destructuring
const imprimePropiedades = ({nombre, codeName, vivo, edad, trajes}) => {
  console.log({nombre, codeName, vivo, edad, trajes})
}

imprimePropiedades(personaje)

