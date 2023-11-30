const elMayor = (a, b) => (a > b) ? a : b

const tieneMembresia = miembro => miembro ? '2 Dolares': '!0 dolares'

console.log(elMayor(5, 10))
console.log(tieneMembresia(true))

const amigo = true
const amigosArr = ['Peter', 'Tony', 'Dr. Strange',
amigo ? 'Thor': 'Loki']

console.log(amigosArr)

const nota = 65
const grado = 
  nota >= 95  ? 'A+'
  :nota >= 90 ? 'A'
  :nota >= 85 ? 'B+'
  :nota >= 80 ? 'B'
  :nota >= 75 ? 'C+'
  :nota >= 70 ? 'C'
  :nota >= 65 ? 'D+'
  :nota >= 60 ? 'D'
  :nota = 'F'

  console.log({nota, grado})