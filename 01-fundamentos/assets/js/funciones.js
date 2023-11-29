function saludo(name) {
  console.log(`Hola ${name}`)
}

saludo('Memo')

const saludo2 = function(name) {
  console.log(`Hola ${name}`)
}

saludo2('Memo2')

const saludoFlecha = name => {
  console.log(`Hola ${name}`)
}

saludoFlecha('Memo3')

function suma(a, b) {
  return a + b 
}
const resultado = suma(10, 5) 
console.log(resultado)

const sumar = (a, b) =>  a + b


const resultado2 = sumar(2, 4)
console.log(resultado2)

function getRandom () {
  return Math.random()
}
const nRandom =  () => Math.random()

console.log(getRandom())
console.log(nRandom())