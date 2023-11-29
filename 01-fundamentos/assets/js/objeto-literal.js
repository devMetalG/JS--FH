let personaje = {
  nombre: 'Peter Parker',
  codeName: 'Spider-Man',
  vivo: true,
  edad: 20,
  coords: {
    lat: 34.03,
    lng: -118.71
  },
  trajes: ['Iron-Spider', 'Spider-Man 2099', 'Amazing Spider-Man'],
  direccion: {
    zip: '10880, 90265',
    ubicacion: 'Malibu, California'
  }
}

console.log(`Nombre: ${personaje.nombre}.`)
console.log(`Nombre: ${personaje['nombre']}.`)
console.log(`Edad: ${personaje['edad']}.`)
console.log(`Latitud: ${personaje.coords.lat}.`)
console.log(`Trajes: ${personaje.trajes.length}.`)
console.log(`Ultimo traje: ${personaje.trajes[personaje.trajes.length - 1]}.`)

const x = 'vivo'

console.log('Esta vivo?:', personaje[x]? 'Si' : 'No')